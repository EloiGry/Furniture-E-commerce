import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
      </Head> 
      <body className='font-Raleway'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
