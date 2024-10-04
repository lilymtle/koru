"use client";

// import components
import Link from "next/link";
import MenuNav from "../MenuNav/MenuNav";

const Header = () => {

    return (
        <header className="bg-transparent w-full flex justify-between p-4">
            <Link href="/">
                <img
                    className="w-10/12 mb-4"
                    src=""
                    alt="koru logo" />
            </Link>
            <nav>
                <MenuNav />
                <div className="nav__wrapper hidden md:block ">
                    <ul className="flex gap-4">
                        <li>
                            <Link 
                                href="/"
                                className="text-sm md:text-base nav-hover-bg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/about"
                                className="text-sm md:text-base nav-hover-bg">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/login"
                                className="text-sm md:text-base nav-hover-bg">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;