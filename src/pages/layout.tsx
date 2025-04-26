import { css } from '@emotion/react'
import { ReactNode } from 'react'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
        min-height: 100dvh;
      `}
    >
      <div>{children}</div>
    </div>
  )
}
