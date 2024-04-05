import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.banner-frame');

            if (window.scrollY > 10) {
                navbar.classList.add('navbar-bground');
            } else {
                navbar.classList.remove('navbar-bground');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header id="header" className="pb-5">
                <div className="banner-frame">
                    <div className="container">
                        <div className="banner">
                            <div className="logo">
                                <img src="./src/assets/logo.png" width="180px" height="60px" alt="Logo" />
                            </div>
                            <label htmlFor="menu-btn">
                                <img className="menu-btn menu-icon" src="./src/assets/menu-btn.png" alt="" />
                            </label>
                            <input type="checkbox" id="menu-btn" className="menu-btn" />
                            <nav id="navbar" className="navbar">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#home">
                                            Home
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#classes">
                                            Classes
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#trainers">
                                            Trainer
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#review">
                                            Review
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" aria-disabled="true">
                                            <span>JOIN US</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div id="home" className="row content">
                        <div className="top-content">
                            <p className="pFirst col">POWERFULL</p>
                            <div className="group-practice-words">
                                <h1>Group</h1>
                                <h1>Practice</h1>
                            </div>
                            <h1>With Trainer</h1>
                            <p className="pSecond">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laudantium commodi dicta dolorem id perspiciatis
                                beatae voluptatum magni voluptates molestiae maxime cumque ducimus eaque, hic ut culpa harum numquam unde ipsa!
                                Voluptas dolore et labore id reiciendis.
                            </p>
                        </div>
                        <div className="bottom-content ">
                            <div className="pThird ">
                                <p>Sign Up</p>
                            </div>
                            <div className="pFourth">
                                <p>Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
