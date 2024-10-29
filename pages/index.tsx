import Head from "next/head";
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { Asap } from "next/font/google";

const asapItalic = Asap({ subsets: ["latin-ext"], style: "italic" });

const socials = [
    {
        href: "https://www.linkedin.com/in/cyril-ramananjaona-837555304",
        title: "LinkedIn",
        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
        href: "https://www.instagram.com/0cyrilram/",
        title: "Instagram",
        d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    },
];

type Tech = { title: string; src: string };

const techs: {
    [key: string]: Tech[];
} = {
    frontend: [
        {
            title: "React",
            src: "react.svg",
        },
        {
            title: "TypeScript",
            src: "typescript.svg",
        },
        {
            title: "Tailwind",
            src: "tailwind.svg",
        },
        {
            title: "Next.js",
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
    ],
};

function Techs({ techs }: { techs: Tech[] }) {
    return (
        <ul className="flex gap-3">
            {techs.map(({ title, src }) => (
                <li
                    key={title}
                    className="relative flex items-center justify-between flex-col"
                >
                    <div className="h-full flex items-center">
                        <Image
                            loading="lazy"
                            alt={title}
                            width={48}
                            height={48}
                            className="h-12 w-12"
                            src={`/images/svgs/${src}`}
                        />
                    </div>
                    <span>{title}</span>
                </li>
            ))}
        </ul>
    );
}

const localeKey = "lang";

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

export default function () {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem(localeKey) ?? "fr");
    }, [i18n]);

    useEffect(() => {
        localStorage.setItem(localeKey, i18n.language);
    }, [i18n.language]);

    return (
        <>
            <Head>
                <title>Cyril Ram.</title>
                <meta name="author" content="Cyril Ramananjaona" />
                <meta
                    name="description"
                    content="Portfolio de Cyril Ramananjaona"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="keywords"
                    content="Portfolio, Dévelopement Web, Web Development, Code, Full-Stack, React, TypeScript, Tailwind, HTML, CSS, JavaScript, Github, Git"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="fixed w-screen">
                <div className="max-w-[1400px] m-auto flex items-center justify-between py-4">
                    <span />
                    <nav className="flex gap-16 text-3xl font-medium">
                        <a href="#" className={asapItalic.className}>
                            {t("home")}
                        </a>
                        <a href="#skills" className={asapItalic.className}>
                            {t("skills.title")}
                        </a>
                        <a href="#projects" className={asapItalic.className}>
                            {t("projects")}
                        </a>
                        <a href="#contact" className={asapItalic.className}>
                            Contact
                        </a>
                    </nav>
                    <div className="h-full flex items-center gap-4">
                        <ThemeSwitcher />
                        <select
                            className="bg-transparent outline-none text-xl"
                            onChange={(e) =>
                                i18n.changeLanguage(e.target.value)
                            }
                            value={i18n.language}
                            title="Language switcher"
                        >
                            <option value="fr">🇫🇷</option>
                            <option value="en">🇺🇸</option>
                        </select>
                    </div>
                </div>
            </header>

            <section className="h-screen flex items-center justify-evenly">
                <div>
                    <h2 className="text-5xl font-semibold">Cyril Ram.</h2>
                    <h1
                        className={`text-6xl font-bold ${asapItalic.className}`}
                    >
                        {t("dev1")} {t("dev2")}
                    </h1>
                    <p className="w-[600px] text-xl py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis minima inventore, ipsa hic deserunt ullam
                        voluptates in consequatur perspiciatis nobis?
                        <a href="#" target="_blank" className="underline px-1">
                            {t("cv")}.
                        </a>
                    </p>
                </div>
                <Image
                    className="rounded-full border-2 border-foreground"
                    src="/images/picture.webp"
                    alt="Picture of Cyril Ram."
                    width={400}
                    height={400}
                    priority
                />
            </section>

            <section id="skills" className="h-screen">
                <h2
                    className={`text-4xl pt-14 font-semibold ${asapItalic.className}`}
                >
                    {t("skills.title")}
                </h2>
                <p className="text-xl">{t("skills.description")}</p>
                {Object.keys(techs).map((tech, idx) => (
                    <div key={idx}>
                        <h3 className="text-xl font-medium">
                            {t(`${tech}.title`)}
                        </h3>
                        <p className="w-96">
                            {/* {t(`${tech}.description`)} */} Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Quod pariatur
                            earum reprehenderit.
                        </p>
                        <Techs techs={techs[tech]} />
                    </div>
                ))}
            </section>
            <section id="projects" className="h-screen">
                <h2
                    className={`text-4xl pt-14 font-semibold ${asapItalic.className}`}
                >
                    {t("Projects")}
                </h2>
            </section>
            <section
                id="contact"
                className="h-screen flex items-center flex-col justify-center"
            >
                <h2
                    className={`text-6xl font-semibold ${asapItalic.className}`}
                >
                    {t("contact.title")}
                </h2>
                <p className="text-2xl my-4">{t("contact.description")}</p>
                <div className="flex flex-col gap-3">
                    {socials.map(({ href, title, d }) => (
                        <a
                            key={title}
                            href={href}
                            title={href}
                            target="_blank"
                            className="flex gap-3 underline w-fit text-foreground text-3xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="var(--foreground)"
                                width={40}
                            >
                                <path d={d} />
                            </svg>
                            {title}
                        </a>
                    ))}
                </div>
                <div
                    title="My email: cramananjaonapro@gmail.com"
                    className="flex gap-3 w-fit text-foreground text-3xl mt-1"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={40}
                        fill="var(--foreground)"
                    >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                    cramananjaonapro@gmail.com
                </div>
            </section>
            <footer className="text-center py-3 text-xl font-medium">
                <div>Cyril Ram. © 2024 | {t("copyrights")}</div>
            </footer>
        </>
    );
}
