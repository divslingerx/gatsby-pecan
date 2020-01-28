import React from 'react'
import { graphql } from 'gatsby'
import ChefQuote from "../components/ChefQuote"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import Main from "../components/Main"
import PropTypes from 'prop-types'
import Layout from "../components/Layout"



import "../styles/css/font-awesome.min.css"
import "../styles/css/bootstrap.css"
import "../styles/css/main.css"

export const IndexPageTemplate = ({
  menu,
  gallery,
  location
}) => (
    <>
      <Layout location={location}>
        <Main menu={menu} />
        {/* <Gallery gallery={gallery} />
        <ChefQuote /> */}
        <Contact />
      </Layout>
    </>
  )

IndexPageTemplate.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <div>
      <IndexPageTemplate
        mainImage={frontmatter.mainImage}
        title={frontmatter.title}
        menu={frontmatter.menu}
        gallery={frontmatter.gallery}
        location={location}
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