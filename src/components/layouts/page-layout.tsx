import { css } from '@emotion/react'

export function PageLayout({ ...props }) {
  return (
    <div
      css={css`
        background-color: var(--color-bg1);
        width: calc(100vw - 6rem);
        padding-inline: 0.75rem;
        border-radius: 0.75rem;
        height: 100%;
      `}
      {...props}
    />
  )
}
