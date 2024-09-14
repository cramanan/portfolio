import { useTranslations } from "next-intl";
import React from "react";
import "./Stack.scss";

const mock = [1, 2, 3, 4, 5, 6];

export default function TechStack() {
    const t = useTranslations("Tech-Stack");
    return (
        <>
            <h2>{t("title")}</h2>
            <div id="stack">
                <h3>{t("learning")}</h3>
                <ul>
                    {mock.map((_, index) => (
                        <li key={index}>{index}</li>
                    ))}
                </ul>
                <h3>{t("basics")}</h3>
            </div>
        </>
    );
}
