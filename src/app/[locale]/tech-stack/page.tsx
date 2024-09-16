import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

import "./Stack.scss";
import nextLogo from "../../assets/svgs/next.svg";
import vercelLogo from "../../assets/svgs/vercel.svg";
import htmlLogo from "../../assets/svgs/html.svg";
import cssLogo from "../../assets/svgs/css.svg";
import jsLogo from "../../assets/svgs/javascript.svg";
import pythonLogo from "../../assets/svgs/python.svg";
import sqliteLogo from "../../assets/svgs/sqlite.svg";
import typescriptLogo from "../../assets/svgs/typescript.svg";
import reactLogo from "../../assets/svgs/react.svg";
import sassLogo from "../../assets/svgs/sass.svg";
import gitLogo from "../../assets/svgs/git.svg";
import dockerLogo from "../../assets/svgs/docker.svg";
import golangLogo from "../../assets/svgs/golang.svg";
import postgresLogo from "../../assets/svgs/postgres.svg";

type Props = {
    title: string;
    path: string;
}[];

const elements: Props[] = [
    [
        { title: "Next.js", path: nextLogo },
        { title: "Vercel", path: vercelLogo },
    ],
    [
        { title: "Git", path: gitLogo },
        { title: "Docker", path: dockerLogo },
    ],
    [
        { title: "Golang", path: golangLogo },
        { title: "PostgreSQL", path: postgresLogo },
    ],
    [
        { title: "React", path: reactLogo },
        { title: "Sass", path: sassLogo },
        { title: "TypeScript", path: typescriptLogo },
    ],
    [
        { title: "Python", path: pythonLogo },
        { title: "SQLite", path: sqliteLogo },
    ],
    [
        { title: "HTML", path: htmlLogo },
        { title: "CSS", path: cssLogo },
        { title: "JS", path: jsLogo },
    ],
];

function StackElement({ props }: { props: Props }) {
    return (
        <li>
            <div className="stack-element">
                {props.map(({ title, path }) => (
                    <div key={title} className="tech">
                        <span>{title}</span>
                        <Image
                            src={path}
                            height={50}
                            width={50}
                            alt={`${title} logo`}
                        />
                    </div>
                ))}
            </div>
        </li>
    );
}

export default function TechStack() {
    const t = useTranslations("Tech-Stack");
    return (
        <>
            <h2>{t("title")}</h2>
            <div id="stack">
                <ul>
                    {elements.map((elt, idx) => (
                        <StackElement key={idx} props={elt} />
                    ))}
                </ul>
            </div>
        </>
    );
}
