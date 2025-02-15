import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import { Navbar } from "../../components/Navbar";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { SearchProvider } from "@/context/SearchContext";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased  bg-white flex flex-col  items-center`}
      >
        <SearchProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <div className="  bg-white   mt-20 h-screen rounded-md">
              {children}
            </div>
          </NextIntlClientProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
