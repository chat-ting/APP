import { css } from '@emotion/react'
import { useAtomValue } from 'jotai/react'
import { PageTitleAtom } from 'stores/page-title'
import { isBrowser } from 'utils/fn/runtime'

export function ElectronTitleBar() {
  if (isBrowser()) return null
  const title = useAtomValue(PageTitleAtom)
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          -webkit-app-region: drag;
          display: flex;
          height: 2.5rem;
          line-height: 0;
          justify-content: center;
          align-items: center;
          width: 100%;
        `}
      >
        <span
          css={css`
            font-size: 0.85rem;
            font-weight: 500;
          `}
        >
          {title}
        </span>
      </div>
    </div>
  )
}
