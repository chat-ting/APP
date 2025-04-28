import { css } from '@emotion/react'
import { ElectronTitleBar } from 'components/layouts/electron/titlebar'
import { Nav } from 'components/layouts/nav/nav'
import { Outlet } from 'react-router'

export function RootLayout() {
  return (
    <div
      css={css`
        width: 100vw;
        height: 100dvh;
        overflow: hidden;
      `}
    >
      <ElectronTitleBar />
      <div
        css={css`
          width: 5rem;
          height: 100%;
          display: flex;
          gap: 1rem;
        `}
      >
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
