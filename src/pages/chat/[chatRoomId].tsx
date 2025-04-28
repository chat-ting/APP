import { useParams } from 'react-router'
import { css } from '@emotion/react'

import { ChatInput } from 'components/sections/chatroom/chat-input'
import { PageLayout } from 'components/layouts/page-layout'

export function Chatroom() {
  const theme = 'dark'
  const { chatRoomId } = useParams()
  return (
    <PageLayout>
      <section id="title">chatroom title here</section>

      <hr
        css={css`
          height: 1px;
          border: none;
          background-color: var(--color-gray);
          margin-block: 1.5rem;
        `}
      />

      <section id="chats">chatting list here</section>
      <section
        id="chat-input"
        css={css`
          width: 100%;
        `}
      >
        <ChatInput />
      </section>
    </PageLayout>
  )
}
