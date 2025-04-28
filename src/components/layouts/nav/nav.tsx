import { css } from '@emotion/react'
import { MainNavigation } from './main-nav'
import { isElectron } from 'utils/fn/runtime'

export function Nav() {
  return (
    <nav
      css={css`
        display: flex;
        height: ${isElectron() ? 'calc(100dvh - 40px)' : '100dvh'};
        /* Electron 환경에서 위쪽 컨트롤 바 높이 제외 */
      `}
    >
      <section id="profile"></section>
      <MainNavigation />
    </nav>
  )
}
