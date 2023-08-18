import React from 'react';

function Booking(props) {
    return (
        <div>
            <div className="booking">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="booking_title text-center">
                                <h2>Book a room</h2>
                            </div>
                            <div className="booking_text text-center">
                                <p>
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                    posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
                                    eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante
                                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                    Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum,
                                    a bibendum lacus suscipit sit.
                                </p>
                            </div>
                            {/* Booking Slider */}
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                    {/* Slide */}
                                    <div className="booking_item">
                                        <div
                                            className="background_image"
                                            style={{ backgroundImage: "url(template-furama/images/booking_1.jpg)" }}
                                        />
                                        <div className="booking_overlay trans_200" />
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link">
                                            <a href="booking.html">Family Room</a>
                                        </div>
                                    </div>
                                    {/* Slide */}
                                    <div className="booking_item">
                                        <div
                                            className="background_image"
                                            style={{ backgroundImage: "url(template-furama/images/booking_2.jpg)" }}
                                        />
                                        <div className="booking_overlay trans_200" />
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link">
                                            <a href="booking.html">Deluxe Room</a>
                                        </div>
                                    </div>
                                    {/* Slide */}
                                    <div className="booking_item">
                                        <div
                                            className="background_image"
                                            style={{ backgroundImage: "url(template-furama/images/booking_3.jpg)" }}
                                        />
                                        <div className="booking_overlay trans_200" />
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link">
                                            <a href="booking.html">Single Room</a>
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

export default Booking;