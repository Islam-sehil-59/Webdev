import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "films et series Next App",
  description: "votre site de streaming gratuit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
