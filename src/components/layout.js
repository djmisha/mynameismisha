import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        wordpressWpApiMenusMenusItems(name: { eq: "React Navigation" }) {
          items {
            wordpress_id
            title
            url
            target
            classes
            object_slug
          }
        }
      }
    `}
    render={data => (
      <>
        <Header
          menu={data.wordpressWpApiMenusMenusItems.items}
          siteTitle={data.site.siteMetadata.title}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 820,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.mynameismisha.com">Misha Osinovskiy</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
