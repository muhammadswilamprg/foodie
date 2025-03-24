import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="a plate with food on it Logo" />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>Brows Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodie Community</NavLink>
                        </li>
                    </ul>
                
                </nav>
            </header>
        </>
    );
}