import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 Error - PAGE NOT FOUND</h1>
    <p>Page not found at this location. Please click the menu button to return to the homepage.</p>
  </Layout>
)

export default NotFoundPage
