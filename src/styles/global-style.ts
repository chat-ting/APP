import { css } from '@emotion/react'
import normalize from 'emotion-normalize'

export const globalStyles = css`
  ${normalize}

  @font-face {
    font-family: 'Gothic A1';
    src: url('/fonts/gothica1-bold-webfont.woff2') format('woff2');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Gothic A1';
    src: url('/fonts/gothica1-semibold-webfont.woff2') format('woff2');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Gothic A1';
    src: url('/fonts/gothica1-medium-webfont.woff2') format('woff2');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Gothic A1';
    src: url('/fonts/gothica1-regular-webfont.woff2') format('woff2');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Gothic A1';
    src: url('/fonts/gothica1-light-webfont.woff2') format('woff2');
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
  }
  body,
  input,
  button,
  textarea,
  li,
  a {
    font-family: 'Gothic A1', sans-serif;
    letter-spacing: -0.03rem;
    font-weight: 400;
  }
`
