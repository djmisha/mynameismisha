import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/allPosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Misha Osinovskiy" keywords={[`gatsby`, `application`, `react`]} />
     <p>Welcome to the personal website of Misha Osinovskiy</p>
	<p>From the blog...</p>
     <AllPosts />
  </Layout>
)

export default IndexPage
