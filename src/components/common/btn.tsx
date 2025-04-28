import { css } from '@emotion/react'
import type { ComponentProps, ElementType } from 'react'
import { PALETTE } from 'styles/palette'

type Variant = 'normal' | 'confirm' | 'error'
type Size = 'fit' | 'full'

type Opts = {
  theme?: 'dark' | 'light'
  variant?: Variant
  size?: Size
}

type Props<T extends ElementType = 'button'> = Opts &
  ComponentProps<T> & {
    as?: T
  }

export function Btn<T extends ElementType>({
  as = 'button',
  size = 'fit',
  variant = 'normal',
  theme = 'light',
  ...props
}: Props<T>) {
  const Component = as

  const palette: Record<Props<any>['variant'], any> = {
    normal: {
      normal: PALETTE.BG1,
      hover: PALETTE.BG2,
      active: PALETTE.BG3,
      text: PALETTE.TEXT,
    },
    confirm: {
      normal: PALETTE.CONFIRM,
      hover: PALETTE.CONFIRM_HOVER,
      active: PALETTE.CONFIRM_ACTIVE,
      text: PALETTE.WHITE,
    },
    error: {
      normal: PALETTE.ERROR,
      hover: PALETTE.ERROR_HOVER,
      active: PALETTE.ERROR_ACTIVE,
      text: PALETTE.WHITE,
    },
  } as const

  return (
    <Component
      css={css`
        width: ${size === 'full' ? '100%' : 'auto'};
        display: inline-flex;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.95rem;
        border: 1px transparent;
        border-radius: 0.75rem;
        padding: 0.7rem 1rem;
        color: ${palette[variant].text};
        background-color: ${palette[variant].normal};
        &:hover {
          background-color: ${palette[variant].hover};
        }
        &:active {
          background-color: ${palette[variant].active};
        }
      `}
      {...props}
    />
  )
}
