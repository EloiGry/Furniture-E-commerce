import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  )
}