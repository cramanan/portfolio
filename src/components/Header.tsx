import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
    return (
        <header>
            <h1>
                <Link href="/">Cyril Ram.</Link>
            </h1>
            <LocaleSwitcher />
        </header>
    );
}
