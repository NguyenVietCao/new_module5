import React from 'react';

function HomeElement(props) {
    return (
        <div>
            <div className="home">
                <div
                    className="background_image"
                    style={{ backgroundImage: "url(template-furama/images/contact.jpg)" }}
                />
                <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content text-center">
                                    <div className="home_title">Elements</div>
                                    <div className="booking_form_container">
                                        <form action="#" className="booking_form" id="booking_form">
                                            <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                                                <div className="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="datepicker booking_input booking_input_a booking_in"
                                                            placeholder="Check in"
                                                            required="required"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="datepicker booking_input booking_input_a booking_out"
                                                            placeholder="Check out"
                                                            required="required"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="number"
                                                            className="booking_input booking_input_b"
                                                            placeholder="Children"
                                                            required="required"
                                                        />
                                                    </div>
                                                    <div>
                                                        <input
                                                            type="number"
                                                            className="booking_input booking_input_b"
                                                            placeholder="Room"
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="booking_button trans_200">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

export default HomeElement;