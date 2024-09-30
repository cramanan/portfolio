import Link from "next/link";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Asap } from "next/font/google";

const asap = Asap({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();

    return (
        <ThemeProvider>
            <header id="main-header" className={asap.className}>
                <div id="container">
                    <span></span>
                    {pathname === "/" && (
                        <nav id="navbar">
                            <Link href="#home">{t("home")}</Link>
                            <Link href="#skills">{t("skills.title")}</Link>
                            <Link href="#projects">{t("projects")}</Link>
                            <Link href="#contact">{t("contact")}</Link>
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
