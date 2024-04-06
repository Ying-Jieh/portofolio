import { useState, useEffect } from 'react';
import { Link } from 'react-scroll' 

function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const toggleNav = () => {
        setNavActive(!navActive);
    }
    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        // This function is called whenever the window is resized.
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);
        // This is the cleanup function for the effect
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="./img/logo.svg" alt="Logoipsum" />
            </div>

            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className='nav_hamburger_line'></span>
                <span className='nav_hamburger_line'></span>
                <span className='nav_hamburger_line'></span>
            </a>

            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} 
                            activeClass='navbar-active-content' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            to="heroSection" // To the id "heroSection"
                            className="navbar-content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            activeClass='navbar-active-content' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            to="MyPortfolio" 
                            className="navbar-content">Porfolio</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            activeClass='navbar-active-content' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            to="AboutMe" 
                            className="navbar-content">AboutMe</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                            activeClass='navbar-active-content' 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500} 
                            to="testimonial" 
                            className="navbar-content">Testimonials</Link>
                    </li>
                </ul>
            </div>
            <Link onClick={closeMenu} 
                activeClass='navbar-active-content' 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                to="Contact" 
                className="btn btn-outline-primary">Contact Me
            </Link>
        </nav>
    );
}

export default Navbar;