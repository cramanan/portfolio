import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <Image
                className={styles.logo}
                src="https://nextjs.org/icons/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <h1>Work in progress...</h1>
            <h2>Come back later :)</h2>
        </div>
    );
}
