import { css } from '@emotion/react'
import type { ComponentProps, ElementType } from 'react'

type Opts = {
  theme?: 'dark' | 'light'
}

type Props<T extends ElementType = 'span'> = Opts &
  ComponentProps<T> & {
    as?: T
  }

export function Txt<T extends ElementType>({
  as = 'span',
  theme = 'light',
  ...props
}: Props<T>) {
  const Component = as

  return (
    <Component
      css={css`
        color: var(--color-text);
      `}
      {...props}
    />
  )
}
