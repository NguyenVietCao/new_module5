import React from 'react';

function Header(props) {
    return (
        <div>
            <header className="header">
                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                    <div className="logo">
                        <a href="#">Furama</a>
                    </div>
                    <div className="ml-auto d-flex flex-row align-items-center justify-content-start">
                        <nav className="main_nav">
                            <ul className="d-flex flex-row align-items-start justify-content-start">
                                <li className="active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="about.html">About us</a>
                                </li>
                                <li>
                                    <a href="#">Rooms</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="book_button">
                            <a href="booking.html">Book Online</a>
                        </div>
                        <div className="header_phone d-flex flex-row align-items-center justify-content-center">
                            <img src="template-furama/images/phone.png" alt="" />
                            <span>0183-12345678</span>
                        </div>
                        {/* Hamburger Menu */}
                        <div className="hamburger">
                            <i className="fa fa-bars" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;