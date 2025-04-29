export type Res_Members_MemberId_get = {
  id: number
  name: string
}

export type Res_Chat__rooms_get = {
  roomId: string
  title: string
}[]
export type Res_Chat__rooms_post = {}

export type Res_Chat__rooms_join_ChatRoomId_get = {}

export type Res_Chat__rooms_ChatRoomId_patch = {}

export type Res_Chat__rooms_Link_post = {
  chatRoomLink: string
}

export type Res_Chat__mesages_ChatRoomId_get = {}

export type Res_Chat__mesages_ChatRoomId_Last_get = {
  id: string
  senderName: string
  content: string
  sentAt: string //timestamp
}[]
