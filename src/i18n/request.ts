import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as "fr" | "en")) notFound();

    return {
        messages:
            locale === "fr"
                ? (await import(`../../messages/fr.json`)).default
                : (await import(`../../messages/${locale}.json`)).default,
    };
});
