import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

type Props = {
    title: string;
    path: string;
}[];

const elements: Props[] = [
    [
        { title: "Next.js", path: "next" },
        { title: "Vercel", path: "vercel" },
    ],

    [
        { title: "Golang", path: "golang" },
        { title: "PostgreSQL", path: "postgres" },
    ],
    [
        { title: "React", path: "react" },
        { title: "Sass", path: "sass" },
        { title: "TypeScript", path: "typescript" },
    ],
    [
        { title: "Python", path: "python" },
        // { title: "SQLite", path: "sqlite" },
    ],
    // [
    //     { title: "HTML", path: "html" },
    //     { title: "CSS", path: "css" },
    //     { title: "JS", path: "javascript" },
    // ],
];

function StackElement({ props }: { props: Props }) {
    return (
        <li>
            <div>
                {props.map(({ title, path }) => (
                    <div key={title} className="tech">
                        <span>{title}</span>
                        <Image
                            src={`/svgs/${path}.svg`}
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
            <div>
                <ul>
                    {elements.map((elt, idx) => (
                        <StackElement key={idx} props={elt} />
                    ))}
                </ul>
            </div>
        </>
    );
}
