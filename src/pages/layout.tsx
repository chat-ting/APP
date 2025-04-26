import { css } from '@emotion/react'
import { ElectronTitleBar } from 'components/layouts/electron/titlebar'
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
      <ElectronTitleBar />
      <div
        css={css`
          padding: 0 0.75rem 0 0.75rem;
        `}
      >
        {children}
      </div>
    </div>
  )
}
