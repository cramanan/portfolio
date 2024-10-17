import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Asap } from "next/font/google";

const asap = Asap({
    subsets: ["latin"],
    variable: "--font-asap",
});

function App({ Component, pageProps }: AppProps) {
    return (
        <main className={asap.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default appWithTranslation(App);
