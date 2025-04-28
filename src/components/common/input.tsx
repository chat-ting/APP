import { css } from '@emotion/react'
import { JSX } from '@emotion/react/jsx-runtime'
import type { ComponentProps, ReactNode } from 'react'

type Opts = {
  Icon?: ReactNode | JSX.Element
  theme?: 'dark' | 'light'
  size?: 'full' | 'fit'
}

type Props = Opts & Omit<ComponentProps<'input'>, 'size'> & {}

export function Input({ Icon, theme = 'light', size = 'full', ...props }: Props) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: ${size === 'full' ? '100%' : 'auto'};
        border: 1px solid transparent;
        border-radius: 0.75rem;
        padding: 0.7rem 1rem;
        outline: 1px solid var(--color-bg1);
        background-color: var(--color-bg0);
        &:hover {
          background-color: var(--color-bg1);
        }
        &:focus-within {
          background-color: var(--color-bg1);
        }
      `}
    >
      {Icon}
      <input
        css={css`
          flex: 1;
          background-color: transparent;
          border: none;
          margin: 0;
          font-size: 0.95rem;
          color: var(--color-text);
          line-height: 1;
          padding-block: 0;
          padding-inline: 1rem;
          outline: none;
        `}
        {...props}
      />
    </div>
  )
}
