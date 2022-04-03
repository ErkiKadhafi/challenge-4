import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [transparentBackground, setTransparentBackground] = useState(true);
    const changeBackgroundNav = () => {
        if (window.scrollY >= 50) setTransparentBackground(false);
        else setTransparentBackground(true);
    };
    window.addEventListener("scroll", changeBackgroundNav);
    return (
        <header
            className={`${
                !transparentBackground ? "bg-blue-secondary/[0.8]" : null
            } fixed top-0 left-0 right-0 z-40 transition-background duration-200`}
        >
            <nav className="layout py-4 flex justify-between">
                <Link to="/">
                    <div className="bg-blue-primary h-9 w-32"></div>
                </Link>
                <div className="flex items-center space-x-8 text-sm">
                    <a href="#">Our Services</a>
                    <a href="#">Why Us</a>
                    <a href="#">Testimonial</a>
                    <a href="#">FAQ</a>
                    <a
                        href="#"
                        className="px-3 py-2 font-bold bg-green-primary text-white hover:bg-green-secondary hover:text-green-primary transition-all duration-200 rounded-sm"
                    >
                        Register
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
