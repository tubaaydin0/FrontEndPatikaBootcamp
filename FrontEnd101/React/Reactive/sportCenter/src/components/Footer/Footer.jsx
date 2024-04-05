import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer-logo mt-2">
                        <img src="./src/assets/logo.png" alt="Apple Logosu" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni adipisci, exercitationem accusantium quae vero voluptatibus incidunt aspernatur repudiandae deserunt officia minima iste provident nam nesciunt asperiores in. Eum, ipsa! Pariatur excepturi ipsa commodi ex.</p>
                    </div>
                </div>

                <div className="row footer-other">

                    <div className="information col-6">
                        <h5>Information</h5>
                        <a href="#">About Us</a> <br />
                        <a href="#">Classes</a><br />
                        <a href="#">Blog</a><br />
                        <a href="#">Contact</a>
                    </div>

                    <div className="helpful col-6 mb-2">
                        <h5>Helpful Links</h5>
                        <a href="#">Services</a> <br />
                        <a href="#">Supports</a><br />
                        <a href="#">Terms & Condition</a><br />
                        <a href="#">Privacy Policy</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
