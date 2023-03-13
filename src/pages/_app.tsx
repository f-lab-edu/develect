import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

import { pretendard } from '@/styles/font'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import type { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{ session: Session }> & {
  Component: NextPageWithLayout
}

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <div className={`${pretendard.className} font-sans`}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </SessionProvider>
  )
}
