import React from "react"

const Banner = ({ mainImage }) => {
  return (
    <section className="home-banner-area relative" style={{
      backgroundImage: `url(${
        !!mainImage.childImageSharp ? mainImage.childImageSharp.fluid.src : mainImage
        })`,
      backgroundPosition: `top left`,
      backgroundAttachment: `fixed`,
    }}>
      <div className="container">
        <div className="row height align-items-center justify-content-center">
          <div className="home-banner-content col-lg-5">
            <h1>Little Pecan Bistro</h1>
            <hr />
            <p>some tastes Bring Your Smile</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Banner