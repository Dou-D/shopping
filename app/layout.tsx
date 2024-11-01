import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProvider from "../providers/NextUIProvider";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CounterStoreProvider } from "@/providers/counter-store-provider";

// Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <CounterStoreProvider>{children}</CounterStoreProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
