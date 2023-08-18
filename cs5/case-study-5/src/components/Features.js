import React from 'react';

function Features(props) {
    return (
        <div>
            <div className="features">
                <div className="container">
                    <div className="row">
                        {/* Icon Box */}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                                <div className="icon_box_icon">
                                    <img
                                        src="template-furama/images/icon_1.svg"
                                        className="svg"
                                        alt="https://www.flaticon.com/authors/monkik"
                                    />
                                </div>
                                <div className="icon_box_title">
                                    <h2>Fabulous Resort</h2>
                                </div>
                                <div className="icon_box_text">
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
                                        eleifend orci ipsum, a bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Icon Box */}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                                <div className="icon_box_icon">
                                    <img
                                        src="template-furama/images/icon_2.svg"
                                        className="svg"
                                        alt="https://www.flaticon.com/authors/monkik"
                                    />
                                </div>
                                <div className="icon_box_title">
                                    <h2>Infinity Pool</h2>
                                </div>
                                <div className="icon_box_text">
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
                                        eleifend orci ipsum, a bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Icon Box */}
                        <div className="col-lg-4 icon_box_col">
                            <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                                <div className="icon_box_icon">
                                    <img
                                        src="template-furama/images/icon_3.svg"
                                        className="svg"
                                        alt="https://www.flaticon.com/authors/monkik"
                                    />
                                </div>
                                <div className="icon_box_title">
                                    <h2>Luxury Rooms</h2>
                                </div>
                                <div className="icon_box_text">
                                    <p>
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                        posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque
                                        eleifend orci ipsum, a bibendum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Features;