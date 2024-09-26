import { useTranslations } from "next-intl";
import "./not-found.scss";

export default function NotFoundPage() {
    const t = useTranslations("NotFoundPage");
    return (
        <>
            <div id="error-container">
                <h1>{t("title")}</h1>
            </div>
        </>
    );
}
