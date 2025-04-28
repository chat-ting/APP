import { css, Global } from '@emotion/react'

export const GlobalThemeVars = () => (
  <Global
    styles={css`
      :root {
        --color-black: rgb(16, 20, 22);
        --color-white: rgb(255, 255, 255);
        --color-gray: rgb(120, 122, 124);

        --color-text: rgb(16, 20, 22);
        --color-text-invert: rgb(251, 253, 255);
        --color-bg0: rgb(246, 248, 250);
        --color-bg1: rgb(255, 255, 255);
        --color-bg2: rgb(239, 241, 243);
        --color-bg3: rgb(233, 235, 237);

        --color-link: rgb(15, 123, 229);
        --color-confirm: rgb(15, 229, 123);
        --color-confirm-hover: rgb(7, 222, 116);
        --color-confirm-active: rgb(0, 214, 108);

        --color-error: rgb(245, 23, 74);
        --color-error-hover: rgb(233, 15, 66);
        --color-error-active: rgb(225, 7, 58);
      }

      body[data-theme='dark'] {
        --color-text: rgb(251, 253, 255);
        --color-text-invert: rgb(16, 20, 22);
        --color-bg0: rgb(24, 28, 30);
        --color-bg1: rgb(14, 18, 20);
        --color-bg2: rgb(33, 37, 39);
        --color-bg3: rgb(40, 44, 46);
      }
    `}
  />
)
