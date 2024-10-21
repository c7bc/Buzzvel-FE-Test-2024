// src/pages/_document.tsx

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Preconnect para melhorar o tempo de resposta das fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Carregamento assíncrono de fontes */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />

        {/* Favicon e PWA */}
        <link rel="icon" href="/icos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icos/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icos/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icos/favicon-16x16.png" />
        <link rel="manifest" href="/icos/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* SEO Meta Tags adicionais podem ser adicionadas aqui */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
