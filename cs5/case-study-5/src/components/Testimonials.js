import React from 'react';

function Testimonials(props) {
    return (
        <div>
            <div className="testimonials">
                <div
                    className="parallax_background parallax-window"
                    data-parallax="scroll"
                    data-image-src="images/testimonials.jpg"
                    data-speed="0.8"
                />
                <div className="testimonials_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="testimonials_slider_container">
                                {/* Testimonials Slider */}
                                <div className="owl-carousel owl-theme test_slider">
                                    {/* Slide */}
                                    <div className="test_slider_item text-center">
                                        <div className="rating rating_5 d-flex flex-row align-items-start justify-content-center">
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                        </div>
                                        <div className="testimonial_title">
                                            <a href="#">Perfect Stay</a>
                                        </div>
                                        <div className="testimonial_text">
                                            <p>
                                                Etiam nec odio vestibulum est mattis effic iturut magna.
                                                Pellentesque sit amet tellus blandit. Etiam nec odio
                                                vestibulum est mattis effic.
                                            </p>
                                        </div>
                                        <div className="testimonial_image">
                                            <img src="images/user_1.jpg" alt="" />
                                        </div>
                                        <div className="testimonial_author">
                                            <a href="#">Samantha Smith</a>, Greece
                                        </div>
                                    </div>
                                    {/* Slide */}
                                    <div className="test_slider_item text-center">
                                        <div className="rating rating_5 d-flex flex-row align-items-start justify-content-center">
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                        </div>
                                        <div className="testimonial_title">
                                            <a href="#">Nice place</a>
                                        </div>
                                        <div className="testimonial_text">
                                            <p>
                                                Etiam nec odio vestibulum est mattis effic iturut magna.
                                                Pellentesque sit amet tellus blandit. Etiam nec odio
                                                vestibulum est mattis effic.
                                            </p>
                                        </div>
                                        <div className="testimonial_image">
                                            <img src="images/user_2.jpg" alt="" />
                                        </div>
                                        <div className="testimonial_author">
                                            <a href="#">Michael Doe</a>, Italy
                                        </div>
                                    </div>
                                    {/* Slide */}
                                    <div className="test_slider_item text-center">
                                        <div className="rating rating_5 d-flex flex-row align-items-start justify-content-center">
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                            <i />
                                        </div>
                                        <div className="testimonial_title">
                                            <a href="#">We loved it</a>
                                        </div>
                                        <div className="testimonial_text">
                                            <p>
                                                Etiam nec odio vestibulum est mattis effic iturut magna.
                                                Pellentesque sit amet tellus blandit. Etiam nec odio
                                                vestibulum est mattis effic.
                                            </p>
                                        </div>
                                        <div className="testimonial_image">
                                            <img src="images/user_3.jpg" alt="" />
                                        </div>
                                        <div className="testimonial_author">
                                            <a href="#">Luis Garcia</a>, Spain
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Testimonials;