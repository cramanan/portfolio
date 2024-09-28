import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import style from "@/styles/Home.module.scss";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
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
            <section id="home" className={style.home}>
                <div id="face-txt">
                    <h1 id="dev">
                        {t("dev1")} {t("dev2")}
                    </h1>
                    <p id="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vitae lectus ut est congue interdum. Cras finibus
                        nunc vitae purus placerat.
                    </p>
                </div>
                <div id="picture">
                    <Image
                        src="/picture.webp"
                        alt="Picture of me"
                        width={400}
                        height={400}
                        priority
                    />
                    <h1>Cyril Ram.</h1>
                </div>
            </section>
            <section id="skills" className={style.skills}>
                <h2>{t("skills")}</h2>
            </section>
            <section id="projects" className={style.projects}>
                <div className="head">
                    <h2>{t("Projects")}</h2>
                </div>
                <div className="project">
                    <div className="screen"></div>
                </div>
                <div className="project">
                    <div className="screen"></div>
                </div>
                <div className="project">
                    <div className="screen"></div>
                </div>
                <div className="project">
                    <div className="screen"></div>
                </div>
            </section>
        </Layout>
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
