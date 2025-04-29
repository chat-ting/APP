import { css } from '@emotion/react'

export function Divider() {
  return (
    <hr
      css={css`
        height: 1px;
        border: none;
        background-color: var(--color-gray);
        margin-block: 1.5rem;
      `}
    />
  )
}
