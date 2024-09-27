"use client";

import { Link, usePathname } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";

export default function Header() {
    const t = useTranslations("Home");
    const pathname = usePathname();

    return (
        <header id="main-header">
            <div id="container">
                <Link href="/">
                    <h1>Cyril Ram.</h1>
                </Link>
                {pathname === "/" && (
                    <nav id="navbar">
                        <a href="#projects">{t("Projects")}</a>
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
