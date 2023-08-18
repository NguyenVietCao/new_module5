import React from 'react';

function About(props) {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="row">
                        {/* About Content */}
                        <div className="col-lg-6">
                            <div className="about_content">
                                <div className="about_title">
                                    <h2>Furama / 10 years of excellence</h2>
                                </div>
                                <div className="about_text">
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
                                        eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum
                                        ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend
                                        orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum
                                        primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                        Suspendisse nec faucibus velit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* About Images */}
                        <div className="col-lg-6">
                            <div className="about_images d-flex flex-row align-items-center justify-content-between flex-wrap">
                                <img src="template-furama/images/about_1.png" alt="" />
                                <img src="template-furama/images/about_2.png" alt="" />
                                <img src="template-furama/images/about_3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>
    );
}

export default About;