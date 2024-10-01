import Link from "next/link";
import { ReactNode, useEffect, useState, useTransition } from "react";
import { useTranslation } from "next-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Asap } from "next/font/google";

const asap = Asap({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();

    const links = [
        {
            href: "#home",
            children: t("home"),
        },
        {
            href: "#skills",
            children: t("skills.title"),
        },
        {
            href: "#projects",
            children: t("projects"),
        },
        {
            href: "#contact",
            children: t("contact"),
        },
    ];

    return (
        <ThemeProvider>
            <header id="main-header" className={asap.className}>
                <div id="container">
                    <span></span>
                    {pathname === "/" && (
                        <nav id="navbar">
                            {links.map((link, key) => (
                                <Link key={key} {...link} />
                            ))}
                        </nav>
                    )}
                    <div id="switchers">
                        <ThemeSwitcher />
                        <select
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                        >
                            <option value="fr">🇫🇷</option>
                            <option value="en">🇺🇸</option>
                        </select>
                    </div>
                </div>
            </header>
            <main className={asap.className}>{children}</main>
            <footer id="main-footer" className={asap.className}>
                <div id="copyrights">Cyril Ram. © 2024 | {t("copyrights")}</div>
            </footer>
        </ThemeProvider>
    );
}
