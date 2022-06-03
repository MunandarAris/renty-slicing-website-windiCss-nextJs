import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* --- google font sora --- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        {/* --- end google font sora --- */}

        {/* --- boxicons --- */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        ></link>
        {/* --- end box icons --- */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
