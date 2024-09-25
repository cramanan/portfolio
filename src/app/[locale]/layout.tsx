import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.scss";

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
