import { css } from '@emotion/react'
import { ComponentProps } from 'react'

type Opts = { theme?: 'dark' | 'light' }
type Props = ComponentProps<'div'> & Opts

export function Card({ theme = 'light', ...props }: Props) {
  return (
    <div
      css={css`
        border: 1px transparent;
        background-color: var(--color-BG1);
        border-radius: 0.75rem;
        padding: 1.25rem 1rem;
      `}
      {...props}
    >
      <div>{props.children}</div>
    </div>
  )
}
