"use client";

import { Link as LocaleLink, usePathname } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
    const t = useTranslations("Home");
    const pathname = usePathname();

    return (
        <header id="main-header">
            <div id="container">
                <LocaleLink href="/">
                    <h1>Cyril Ram.</h1>
                </LocaleLink>
                {pathname === "/" && (
                    <nav id="navbar">
                        <Link href="#home">{t("home")}</Link>
                        <Link href="#skills">{t("skills")}</Link>
                        <Link href="#projects">{t("Projects")}</Link>
                    </nav>
                )}
                <div id="switchers">
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                </div>
            </div>
        </header>
    );
}
