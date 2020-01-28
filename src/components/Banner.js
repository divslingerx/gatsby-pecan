import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const LargeBanner = ({ mainImage }) => {
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

const SmallBanner = ({ mainImage }) => {
  return (
    <section className="home-banner-area relative justify-content-center" style={{
      backgroundImage: `url(${
        !!mainImage.childImageSharp ? mainImage.childImageSharp.fluid.src : mainImage
        })`,
      backgroundPosition: `center`,
      backgroundAttachment: `fixed`,
      backgroundSize: 'fill',
      padding: "3rem 0"
    }}>
      <h1 style={{ textAlign: "center", background: "white", color: "#c37236" }}>Little Pecan Bistro</h1>
    </section>
  )
}

const Banner = ({ location }) => {

  const data = useStaticQuery(graphql`
    query HeaderQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      mainImage {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
  `)

  const { mainImage } = data.markdownRemark.frontmatter


  if (location.pathname === "/") {
    return <LargeBanner mainImage={mainImage} />
  } else {
    return <SmallBanner mainImage={mainImage} />
  }


}

export default Banner