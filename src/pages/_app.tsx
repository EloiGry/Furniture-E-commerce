import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import { useAppStore } from '@/lib/store'
import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'

export default function App({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)

  const { products } = useAppStore()

  useEffect(() => {
    setLoaded(true);
}, [products]);

if (!products || !loaded) {
  return (
    <Loading/>
  )
}

  return (
    <SessionProvider session={pageProps.session}>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  )
}