import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { Asap } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "@/styles/globals.css";

const asap = Asap({
    subsets: ["latin"],
    variable: "--font-asap",
});

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider enableSystem>
            <main className={asap.className}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}

export default appWithTranslation(App);
