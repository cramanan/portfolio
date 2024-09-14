import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "fr",
        fallbackLng: "fr",
        resources: {
            fr: {
                translation: {
                    ["Développeur"]: "Développeur",
                    ["Full-Stack"]: "Full-Stack",
                    ["Projets"]: "Projets",
                    ["Compétences techniques"]: "Compétences techniques",
                    ["Voir plus"]: "Voir plus",
                },
            },
            en: {
                translation: {
                    ["Développeur"]: "Full-Stack",
                    ["Full-Stack"]: "Developer",
                    ["Projets"]: "Projects",
                    ["Compétences techniques"]: "Technical skills",
                    ["Voir plus"]: "See more",
                },
            },
        },
    });

export default i18next;
