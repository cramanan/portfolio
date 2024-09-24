import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
    return (
        <header>
            <Link href="/">
                <h1>Cyril Ram.</h1>
            </Link>
            <LocaleSwitcher />
        </header>
    );
}
