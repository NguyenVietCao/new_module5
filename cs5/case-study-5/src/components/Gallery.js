import React from 'react';

function Gallery(props) {
    return (
        <div>
            <div className="gallery">
                <div className="gallery_slider_container">
                    <div className="owl-carousel owl-theme gallery_slider">
                        {/* Slide */}
                        <div className="gallery_item">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/gallery_1.jpg)" }}
                            />
                            <a className="colorbox" href="template-furama/images/gallery_1.jpg" />
                        </div>
                        {/* Slide */}
                        <div className="gallery_item">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/gallery_2.jpg)" }}
                            />
                            <a className="colorbox" href="template-furama/images/gallery_2.jpg" />
                        </div>
                        {/* Slide */}
                        <div className="gallery_item">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/gallery_3.jpg)" }}
                            />
                            <a className="colorbox" href="template-furama/images/gallery_3.jpg" />
                        </div>
                        {/* Slide */}
                        <div className="gallery_item">
                            <div
                                className="background_image"
                                style={{ backgroundImage: "url(template-furama/images/gallery_4.jpg)" }}
                            />
                            <a className="colorbox" href="template-furama/images/gallery_4.jpg" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Gallery;