import { css } from '@emotion/react'
import { memo } from 'react'

type Axis = 'x' | 'y'

interface Props {
  axis?: Axis
  size: number | string
}

export const Spacing = memo(({ axis = 'y', size }: Props) => {
  const length = typeof size === 'number' ? `${size}rem` : size

  return (
    <div
      aria-hidden
      css={
        axis === 'x'
          ? css`
              display: 'inline-block';
              width: ${length};
              height: 100%;
            `
          : css`
              display: 'block';
              width: 100%;
              height: ${length};
            `
      }
    />
  )
})
