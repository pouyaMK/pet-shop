import type { Metadata } from "next";
// import { yekanBakh, openSans } from "./style/font";
import { yekanBakh } from "./style/font";
import "./globals.css";


export const metadata: Metadata = {
  title: "پت شاپ",
  description: "petp-shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    suppressHydrationWarning
      lang="en"
      className={`h-full`}
    >
        <body style={{ fontFamily: "var(--font-yekan-bakh)" }}   className={`
    ${yekanBakh.variable}

    font-yekan
    min-h-full
    flex
    flex-col
  `}>{children}</body>
    </html>
  );
}
