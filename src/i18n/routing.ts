import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "fr"],
    defaultLocale: "en",
    pathnames: {
        "/": "/",
        "/tech-stack": {
            fr: "/stack-technique",
            en: "/tech-stack",
        },
    },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation(routing);
