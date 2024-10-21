import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomFooter from "@/components/CustomFooter";

export const metadata: Metadata = {
  title: "Young Engineers Mongolia",
  description: "Young Engineers Mongolia organization",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <CustomFooter />
      </body>
    </html>
  );
}
