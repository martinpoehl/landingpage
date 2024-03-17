import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-C4R57RK53J" />
    </html>
  );
}
