import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"

export default class Page extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="Page" />
        <h1>{data.wordpressPage.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.wordpressPage.content,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query PageQuery($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      slug
      content
    }
  }
`
