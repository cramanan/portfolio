import { Link } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    return (
        <header id="main-header">
            <div className="layout-container">
                <Link href="/">
                    <h1>Cyril Ram.</h1>
                </Link>
                <div id="switchers">
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                </div>
            </div>
        </header>
    );
}
