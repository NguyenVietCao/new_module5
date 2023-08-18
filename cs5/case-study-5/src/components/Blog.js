import React from 'react';

function Blog(props) {
    return (
        <div>
            <div className="blog">
                {/* Blog Slider */}
                <div className="blog_slider_container">
                    <div className="owl-carousel owl-theme blog_slider">
                        {/* Slide */}
                        <div className="blog_slide">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/index_blog_1.jpg)" }}
                            />
                            <div className="blog_content">
                                <div className="blog_date">
                                    <a href="#">Oct 20, 2018</a>
                                </div>
                                <div className="blog_title">
                                    <a href="#">How to book your stay</a>
                                </div>
                            </div>
                        </div>
                        {/* Slide */}
                        <div className="blog_slide">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/index_blog_2.jpg)" }}
                            />
                            <div className="blog_content">
                                <div className="blog_date">
                                    <a href="#">Oct 20, 2018</a>
                                </div>
                                <div className="blog_title">
                                    <a href="#">10 restaurants in town</a>
                                </div>
                            </div>
                        </div>
                        {/* Slide */}
                        <div className="blog_slide">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/index_blog_3.jpg)" }}
                            />
                            <div className="blog_content">
                                <div className="blog_date">
                                    <a href="#">Oct 20, 2018</a>
                                </div>
                                <div className="blog_title">
                                    <a href="#">A perfect wedding</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Blog;