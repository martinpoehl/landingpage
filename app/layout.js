import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C4R57RK53J"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-C4R57RK53J');
        </script>
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-C4R57RK53J" />
    </html>
  );
}
