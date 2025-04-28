import { css } from '@emotion/react'
import { HomeIcon } from '@radix-ui/react-icons'
import { Btn } from 'components/common/btn'
import { Link } from 'react-router'

export function MainNavigation() {
  return (
    <div
      css={css`
        width: 5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      `}
    >
      <Btn
        as={Link}
        to="/"
        css={css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      >
        <HomeIcon width="1rem" height="1rem" />
      </Btn>
      <Btn
        as={Link}
        to="/"
        css={css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      >
        <HomeIcon width="1rem" height="1rem" />
      </Btn>
      <Btn
        as={Link}
        to="/"
        css={css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      >
        <HomeIcon width="1rem" height="1rem" />
      </Btn>
      <Btn
        as={Link}
        to="/"
        css={css`
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        `}
      >
        <HomeIcon width="1rem" height="1rem" />
      </Btn>
    </div>
  )
}
