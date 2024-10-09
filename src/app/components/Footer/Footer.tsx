// import component
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <img
                className="w-6/12"
                src="/assets/logos/logo.png"
                alt="koru logo" />

            <p className="text-xs self-center">
                Crafted with ♥ by Lily 
            </p>

            <section className="w-full flex flex-row justify-between mt-4 mb-4">
                <div className="">
                    <h4 className="footer__title">
                        General
                    </h4>

                    <ul>
                        <Link className="footer__link" href="/about">
                            <li className="text-xs leading-relaxed">
                                About
                            </li>
                        </Link>
                        
                        <Link className="footer__link" href="/contact">
                            <li className="text-xs leading-relaxed">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="">
                    <h4 className="footer__title">
                        Social
                    </h4>

                    <ul>
                        <Link className="footer__link" href="https://linkedin.com/in/lilymtle">
                            <li className="text-xs leading-relaxed">
                                LinkedIn
                            </li>
                        </Link>

                        <Link className="footer__link" href="https://github.com/lilymtle">
                            <li className="text-xs leading-relaxed">
                                GitHub
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="">
                    <h4 className="footer__title">
                        Resources
                    </h4>

                    <ul>
                        <Link className="footer__link" href="https://mood-compass.vercel.app/">
                            <li className="text-xs leading-relaxed">
                                MoodCompass
                            </li>
                        </Link>
                    </ul>
                </div>
            </section>

            <p className="text-xs">
                © 2024 Koru, All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;