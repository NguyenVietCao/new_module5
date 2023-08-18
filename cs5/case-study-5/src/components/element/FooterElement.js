import React from 'react';

function FooterElement(props) {
    return (
        <div>
            <footer className="footer">
                <div className="footer_content">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="footer_logo_container text-center">
                                    <div className="footer_logo">
                                        <a href="#" />
                                        <div>The River</div>
                                        <div>since 1945</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer_row">
                            {/* Address */}
                            <div className="col-lg-3">
                                <div className="footer_title">Our Address</div>
                                <div className="footer_list">
                                    <ul>
                                        <li>Beach Str. 345</li>
                                        <li>67559 Miami</li>
                                        <li>USA</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Reservations */}
                            <div className="col-lg-3">
                                <div className="footer_title">Reservations</div>
                                <div className="footer_list">
                                    <ul>
                                        <li>Tel: 345 5667 889</li>
                                        <li>Fax; 6783 4567 889</li>
                                        <li>reservations@hotelriver.com</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Newsletter */}
                            <div className="col-lg-3">
                                <div className="footer_title">Newsletter</div>
                                <div className="newsletter_container">
                                    <form action="#" className="newsletter_form" id="newsletter_form">
                                        <input
                                            type="email"
                                            className="newsletter_input"
                                            placeholder="Your email address"
                                            required="required"
                                        />
                                        <button className="newsletter_button">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            {/* Footer images */}
                            <div className="col-lg-3">
                                <div className="certificates d-flex flex-row align-items-start justify-content-lg-between justify-content-start flex-lg-nowrap flex-wrap">
                                    <div className="cert">
                                        <img src="images/cert_1.png" alt="" />
                                    </div>
                                    <div className="cert">
                                        <img src="images/cert_2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                        Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
            </footer>

        </div>
    );
}

export default FooterElement;