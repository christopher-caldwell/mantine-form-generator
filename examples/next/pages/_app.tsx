import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from 'utils/createEmotionCache'
import { ThemeProvider, WhichThemeProvider } from 'providers'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MUI Form Generator</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <WhichThemeProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </WhichThemeProvider>
    </CacheProvider>
  )
}
