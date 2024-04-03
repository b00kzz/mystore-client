import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "@/components/MainLayout";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      {/* <head>
        <title>MyStore</title>
      </head> */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["orange", "green", "light", "dark"]}
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="pt-14">
              <MainLayout>{children}</MainLayout>
            </main>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
