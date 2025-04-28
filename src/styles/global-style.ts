import { css } from '@emotion/react'
import normalize from 'emotion-normalize'

export const globalStyles = css`
  ${normalize}
  *,*::after,*::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff')
      format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'S-CoreDream';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-7ExtraBold.woff')
      format('woff');
    font-weight: 800;
    font-style: normal;
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
    font-family: 'S-CoreDream', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`
