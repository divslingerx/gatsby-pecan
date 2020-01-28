import React from "react"
import Layout from "../components/Layout"
import Menu from "../components/Menu"
import { graphql } from "gatsby"

const MenuPage = ({ data, location }) => {
    const { frontmatter } = data.markdownRemark
    return (
        <Layout location={location}>
            <Menu menu={frontmatter.menu} />
        </Layout>
    )
}

export const pageQuery = graphql`
  query MenuPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter {
            menu {
                sections {
                    heading
                    items {
                        name
                        description
                    }
                }
            }
        }
    }
}
`





export default MenuPage