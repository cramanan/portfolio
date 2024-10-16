import Head from "next/head";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Contact from "@/components/Contact";

import { useTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
// import { Asap } from "next/font/google";

type Tech = { title: string; src: string };

const socials = [
    {
        href: "https://github.com/cramanan",
        title: "Github",
        d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    },
    {
        href: "https://www.linkedin.com/in/cyril-ramananjaona-837555304",
        title: "Linkedin",
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
];

const techs: {
    [key: string]: Tech[];
} = {
    frontend: [
        {
            title: "React",
            src: "react.svg",
        },
        {
            title: "Tailwind",
            src: "tailwind.svg",
        },
        {
            title: "TypeScript",
            src: "typescript.svg",
        },
        {
            title: "Next JS",
            src: "next.svg",
        },
    ],
    backend: [
        {
            title: "Golang",
            src: "golang.svg",
        },
        {
            title: "PostgreSQL",
            src: "postgresql.svg",
        },
    ],
    tools: [
        {
            title: "Git",
            src: "git.svg",
        },
        {
            title: "Docker",
            src: "docker.svg",
        },
        {
            title: "Vercel",
            src: "vercel.svg",
        },
    ],
};

function Techs({ techs }: { techs: Tech[] }) {
    return (
        <ul>
            {techs.map(({ title, src }) => (
                <li key={title}>
                    <Image
                        alt={title}
                        width={40}
                        height={40}
                        loading="lazy"
                        src={`/images/svgs/${src}`}
                    />
                    <span>{title}</span>
                </li>
            ))}
        </ul>
    );
}

// const asap = Asap({ subsets: ["latin"] });

const localeKey = "lang";

export default function Home() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem(localeKey) ?? "fr");
    }, [i18n]);

    useEffect(
        () => localStorage.setItem(localeKey, i18n.language),
        [i18n.language]
    );

    return (
        <ThemeProvider>
            <Head>
                <title>Cyril Ram.</title>
                <meta
                    name="description"
                    content="Cyril Ramananjaona's Portfolio"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div>
                    <span></span>
                    <nav>
                        <a href="#">{t("home")}</a>
                        <a href="#skills">{t("skills.title")}</a>
                        <a href="#projects">{t("projects")}</a>
                        <a href="#contact">{t("contact")}</a>
                    </nav>
                    <div>
                        <ThemeSwitcher />
                        <select
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            value={i18n.language}
                        >
                            <option value="fr">🇫🇷</option>
                            <option value="en">🇺🇸</option>
                        </select>
                    </div>
                </div>
            </header>
            <section>
                <div>
                    <h1>Cyril Ram.</h1>
                    <h1>
                        {t("dev1")} {t("dev2")}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vitae lectus ut est congue interdum. Cras finibus
                        nunc vitae purus placerat.{" "}
                        <a href="#" target="_blank">
                            {t("cv")}.
                        </a>
                    </p>

                    <ul>
                        {socials.map(({ title, href, d }) => (
                            <li key={title}>
                                <a href={href} target="_blank">
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="var(--foreground)"
                                        width={40}
                                    >
                                        <title>{title}</title>
                                        <path d={d} />
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src="/images/picture.webp"
                    alt="Picture of me"
                    width={400}
                    height={400}
                    priority
                />
            </section>
            <section>
                <h2>{t("skills.title")}</h2>
                <p>{t("skills.description")}</p>
                {Object.keys(techs).map((tech, idx) => (
                    <div key={idx}>
                        <div>
                            <h3>{t(`${tech}.title`)}</h3>
                            <p>{t(`${tech}.description`)}</p>
                            <Techs techs={techs[tech]} />
                        </div>
                    </div>
                ))}
            </section>
            <section>
                <h2>{t("Projects")}</h2>
            </section>
            <section>
                <h2>{t("contact")}</h2>
                <Contact />
            </section>
            <footer>
                <div>Cyril Ram. © 2024 | {t("copyrights")}</div>
            </footer>
        </ThemeProvider>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "fr", ["common"], null, [
                "fr",
                "en",
            ])),
        },
    };
};
