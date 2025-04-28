import { Routes } from 'pages/routes'
import { PageLayout } from 'pages/layout'
import { Global } from '@emotion/react'
import { DevTools } from 'jotai-devtools'
import { Providers } from 'components/providers'
import { globalStyles } from 'styles/global-style'

function App() {
  return (
    <Providers>
      <DevTools position="top-right" />
      <Global styles={globalStyles} />
      <PageLayout>
        <Routes />
      </PageLayout>
    </Providers>
  )
}

export default App
