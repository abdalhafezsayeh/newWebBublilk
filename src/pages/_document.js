import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <Head>
        <link rel="icon" href="/logo.webp" />
        <meta name="application-name" content="Kiro Travel" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kiro Travel" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.webp" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/logo.wepb" color="#FFF" />
        <link rel="shortcut icon" href="/logo.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
