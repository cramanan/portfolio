"use client";

import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";

type Props = {
    children: ReactNode;
    defaultValue: string;
};

export default function LocaleSwitcherSelect({
    children,
    defaultValue,
}: Props) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        console.log(window.location.hash);

        const locale = event.target.value as Locale;
        startTransition(() => {
            router.replace({ pathname }, { locale });
        });
    }

    return (
        <select
            defaultValue={defaultValue}
            disabled={isPending}
            onChange={onSelectChange}
            id="locale-switcher"
        >
            {children}
        </select>
    );
}
