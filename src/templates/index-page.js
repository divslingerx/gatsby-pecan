import React from 'react'
import { graphql } from 'gatsby'
import Banner from "../components/Banner"
import ChefQuote from "../components/ChefQuote"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Main from "../components/Main"
import PropTypes from 'prop-types'

import logo from "../img/logo.png"

import "../../SOURCE/css/font-awesome.min.css"
import "../../SOURCE/css/bootstrap.css"
import "../../SOURCE/css/main.css"

export const IndexPageTemplate = ({
  menu,
  gallery
}) => (
    <>
      <Header logo={logo} />
      <Banner mainImage={mainImage} />
      <Main menu={menu} />
      <Gallery gallery={gallery} />
      <ChefQuote />
      <Contact />
      <Footer />
    </>
  )

IndexPageTemplate.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)

  return (
    <div>
      <IndexPageTemplate
        logo={frontmatter.logo}
        title={frontmatter.title}
        menu={frontmatter.menu}
        gallery={frontmatter.gallery}
      />
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      menu{
        sections{
          heading
          items{
            name
            description
          }
        }
      }
      gallery {
        image1 {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
          image2 {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
          image3 {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
          image4 {
          image {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
}


  `