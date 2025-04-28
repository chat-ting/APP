import { Routes } from 'pages/routes'
import { Global } from '@emotion/react'
import { DevTools } from 'jotai-devtools'
import { Providers } from 'components/providers'
import { globalStyles } from 'styles/global-style'
import { GlobalThemeVars } from 'styles/global-theme-vars'

function App() {
  return (
    <Providers>
      <DevTools position="top-right" />
      <GlobalThemeVars />
      <Global styles={globalStyles} />
      <Routes />
    </Providers>
  )
}

export default App
