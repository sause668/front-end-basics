import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#2962ff"/>
        <meta name="msapplication-TileColor" content="#2962ff"/>
        <meta name="theme-color" content="#2962ff"/>
      </Head>
      <body style={{margin: '0px', padding: '0px'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
