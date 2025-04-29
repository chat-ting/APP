import { Client, IMessage } from '@stomp/stompjs'
import { Observable, defer, switchMap, shareReplay } from 'rxjs'

export const connect$ = defer(
  () =>
    new Observable<Client>(observer => {
      const token = 'jwt' //auth로 인증 해야할듯;
      const stomp = new Client({
        brokerURL: `/ws-native?token=${token}`,
        heartbeatIncoming: 10000,
        heartbeatOutgoing: 10000,
        reconnectDelay: 5000,

        debug: msg => console.warn('ws', msg),
      })

      stomp.onConnect = () => observer.next(stomp)
      stomp.onStompError = frame => observer.error(frame)
      stomp.onWebSocketClose = () => observer.complete()

      stomp.activate()
      return () => stomp.deactivate()
    })
).pipe(shareReplay({ bufferSize: 1, refCount: true }))

export const chatTopic$ = (chatRoomId: string): Observable<IMessage> =>
  connect$.pipe(
    switchMap(
      client =>
        new Observable<IMessage>(observer => {
          const sub = client.subscribe(`/topic/chat/${chatRoomId}`, msg =>
            observer.next(msg)
          )
          return () => sub.unsubscribe()
        })
    )
  )

export const sendChat = (
  body: {
    roomId: string
    content: string
  },
  headers = {}
) =>
  connect$.subscribe(client =>
    client.publish({
      destination: `/chat/send`,
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json', ...headers },
    })
  )
