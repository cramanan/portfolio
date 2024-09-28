import Layout from "@/components/Layout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotFound() {
    return <Layout>404</Layout>;
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
