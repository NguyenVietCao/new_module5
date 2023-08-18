import React from 'react';

function Elements(props) {
    return (
        <div>
            <div className="elements">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* Buttons */}
                            <div className="buttons">
                                <div className="elements_title">
                                    <h2>Buttons</h2>
                                </div>
                                <div className="buttons_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                                    <div className="button button_1">
                                        <a href="#">Subscribe</a>
                                    </div>
                                    <div className="button button_2">
                                        <a href="#">Subscribe</a>
                                    </div>
                                    <div className="button button_3">
                                        <a href="#">Subscribe</a>
                                    </div>
                                    <div className="button button_4">
                                        <a href="#">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                            {/* Accordions & Tabs */}
                            <div className="acc_tabs">
                                <div className="elements_title">
                                    <h2>Accordions &amp; Tabs</h2>
                                </div>
                                <div className="row acc_tabs_row">
                                    <div className="col-lg-6">
                                        {/* Accordions */}
                                        <div className="accordions">
                                            {/* Accordion */}
                                            <div className="accordion_container">
                                                <div className="accordion d-flex flex-row align-items-center">
                                                    <div>
                                                        Vivamus auctor mi eget odio feugiat, quis aliquet velit
                                                        ornare
                                                    </div>
                                                </div>
                                                <div className="accordion_panel">
                                                    <div>
                                                        <p>
                                                            Vestibulum ante ipsum primis in faucibus orci luctus et
                                                            ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                            velit. Quisque eleifend orci ipsum, a bibendum lacus
                                                            suscipit sit. Vestibulum ante ipsum primis in faucibus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion */}
                                            <div className="accordion_container">
                                                <div className="accordion d-flex flex-row align-items-center">
                                                    <div>
                                                        Auctor mi eget odio feugiat, quis aliquet velit ornare
                                                    </div>
                                                </div>
                                                <div className="accordion_panel">
                                                    <div>
                                                        <p>
                                                            Vestibulum ante ipsum primis in faucibus orci luctus et
                                                            ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                            velit. Quisque eleifend orci ipsum, a bibendum lacus
                                                            suscipit sit. Vestibulum ante ipsum primis in faucibus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Accordion */}
                                            <div className="accordion_container">
                                                <div className="accordion d-flex flex-row align-items-center active">
                                                    <div>
                                                        Vivamus auctor mi eget odio feugiat, quis aliquet velit
                                                        ornare
                                                    </div>
                                                </div>
                                                <div className="accordion_panel">
                                                    <div>
                                                        <p>
                                                            Vestibulum ante ipsum primis in faucibus orci luctus et
                                                            ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                            velit. Quisque eleifend orci ipsum, a bibendum lacus
                                                            suscipit sit. Vestibulum ante ipsum primis in faucibus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 tabs_col">
                                        {/* Tabs */}
                                        <div className="tabs">
                                            <div className="tabs_container">
                                                <div className="tabs d-flex flex-row align-items-center justify-content-start flex-wrap">
                                                    <div className="tab">Vivamus auctor</div>
                                                    <div className="tab">Auctor mi eget</div>
                                                    <div className="tab active">Vivamus auctor</div>
                                                </div>
                                                <div className="tab_panels">
                                                    <div className="tab_panel">
                                                        <div className="tab_panel_content">
                                                            <div className="tab_text">
                                                                <p>
                                                                    Vestibulum ante ipsum primis in faucibus orci luctus
                                                                    et ultrices posuere cubilia Curae; Suspendisse nec
                                                                    faucibus velit. Quisque eleifend orci ipsum, a
                                                                    bibendum lacus suscipit sit. Vestibulum ante ipsum
                                                                    primis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab_panel">
                                                        <div className="tab_panel_content">
                                                            <div className="tab_text">
                                                                <p>
                                                                    Vestibulum ante ipsum primis in faucibus orci luctus
                                                                    et ultrices posuere cubilia Curae; Suspendisse nec
                                                                    faucibus velit. Quisque eleifend orci ipsum, a
                                                                    bibendum lacus suscipit sit. Vestibulum ante ipsum
                                                                    primis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab_panel active">
                                                        <div className="tab_panel_content">
                                                            <div className="tab_text">
                                                                <p>
                                                                    Vestibulum ante ipsum primis in faucibus orci luctus
                                                                    et ultrices posuere cubilia Curae; Suspendisse nec
                                                                    faucibus velit. Quisque eleifend orci ipsum, a
                                                                    bibendum lacus suscipit sit. Vestibulum ante ipsum
                                                                    primis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Loaders */}
                            <div className="loaders">
                                <div className="elements_title">
                                    <h2>Loaders</h2>
                                </div>
                                <div className="loaders_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                                    {/* Loader */}
                                    <div className="loader_container text-center">
                                        <div className="loader text-center" data-perc="0.9">
                                            <div className="loader_content">
                                                <div className="loader_title">Good Services</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Loader */}
                                    <div className="loader_container text-center">
                                        <div className="loader text-center" data-perc="0.8">
                                            <div className="loader_content">
                                                <div className="loader_title">Tourists</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Loader */}
                                    <div className="loader_container text-center">
                                        <div className="loader text-center" data-perc={1.0}>
                                            <div className="loader_content">
                                                <div className="loader_title">Satisfaction</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Loader */}
                                    <div className="loader_container text-center">
                                        <div className="loader text-center" data-perc="0.5">
                                            <div className="loader_content">
                                                <div className="loader_title">Children</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Milestones */}
                            <div className="milestones">
                                <div className="elements_title">
                                    <h2>Milestones</h2>
                                </div>
                                {/* Milestones */}
                                <div className="milestones_container d-flex flex-row align-items-start justify-content-start flex-wrap">
                                    {/* Milestone */}
                                    <div className="milestone d-flex flex-row align-items-start justify-content-start">
                                        <div className="milestone_content">
                                            <div className="milestone_counter" data-end-value={45}>
                                                0
                                            </div>
                                            <div className="milestone_title">Rooms available</div>
                                        </div>
                                    </div>
                                    {/* Milestone */}
                                    <div className="milestone d-flex flex-row align-items-start justify-content-start">
                                        <div className="milestone_content">
                                            <div
                                                className="milestone_counter"
                                                data-end-value={21}
                                                data-sign-after="K"
                                            >
                                                0
                                            </div>
                                            <div className="milestone_title">Tourists this year</div>
                                        </div>
                                    </div>
                                    {/* Milestone */}
                                    <div className="milestone d-flex flex-row align-items-start justify-content-start">
                                        <div className="milestone_content">
                                            <div className="milestone_counter" data-end-value={2}>
                                                0
                                            </div>
                                            <div className="milestone_title">Swimming pools</div>
                                        </div>
                                    </div>
                                    {/* Milestone */}
                                    <div className="milestone d-flex flex-row align-items-start justify-content-start">
                                        <div className="milestone_content">
                                            <div className="milestone_counter" data-end-value={143}>
                                                0
                                            </div>
                                            <div className="milestone_title">Staff members</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Icon Boxes */}
                            <div className="icon_boxes">
                                <div className="elements_title">
                                    <h2>Icon Boxes</h2>
                                </div>
                                <div className="row icon_boxes_row">
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
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et
                                                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                    velit. Quisque eleifend orci ipsum, a bibendum.
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
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et
                                                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                    velit. Quisque eleifend orci ipsum, a bibendum.
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
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et
                                                    ultrices posuere cubilia Curae; Suspendisse nec faucibus
                                                    velit. Quisque eleifend orci ipsum, a bibendum.
                                                </p>
                                            </div>
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

export default Elements;