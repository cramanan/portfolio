import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

import svgs from "./svgs.json";
import "./Home.scss";

export default function Home() {
    const t = useTranslations("Home");
    return (
        <>
            <div id="face-card">
                <Image
                    width={140}
                    height={140}
                    src="/picture.jpg"
                    alt="A picture of Cyril Ram."
                />
                <div id="job">
                    <div>{t("dev1")}</div>
                    <div>{t("dev2")}</div>
                </div>
            </div>
            <div id="skills">
                <div>
                    <h2>{t("skills")}</h2>
                    <Link href="/tech-stack">{t("More")}</Link>
                </div>
                <ul>
                    {svgs.map(({ title, path }) => (
                        <li key={title}>
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={50}
                                height={50}
                            >
                                <title>{title}</title>
                                <path d={path} fill="var(--foreground)" />
                            </svg>
                            <div>{title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
