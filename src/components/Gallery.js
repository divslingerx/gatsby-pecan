import React from "react"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

export default ({ gallery }) => {
    const { image1, image2, image3, image4 } = gallery
    console.table(gallery)

    return (

        <section className="gallery-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-6">
                        <div className="single-gallery mt--480">
                            <div className="overlay"></div>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: image1,
                                    alt: image1.alt,
                                }}
                            />
                            <div className="icon">
                                <a href="img/gallery/g1.jpg" className="photo-gallery-pop-up">
                                    <span className="lnr lnr-cross"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-gallery">
                            <div className="overlay"></div>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: image2,
                                    alt: image2.alt,
                                }}
                            />
                            <div className="icon">
                                <a href="img/gallery/g2.jpg" className="photo-gallery-pop-up">
                                    <span className="lnr lnr-cross"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5 col-md-5 col-sm-6">
                        <div className="single-gallery mt--280">
                            <div className="overlay"></div>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: image3,
                                    alt: image3.alt,
                                }}
                            />
                            <div className="icon">
                                <a href="img/gallery/g3.jpg" className="photo-gallery-pop-up">
                                    <span className="lnr lnr-cross"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="single-gallery">
                            <div className="overlay"></div>
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: image4,
                                    alt: image4.alt,
                                }}
                            />
                            <div className="icon">
                                <a href="img/gallery/g4.jpg" className="photo-gallery-pop-up">
                                    <span className="lnr lnr-cross"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}