import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/icos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icos/favicon-16x16.png" />
        <link rel="manifest" href="/icos/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
