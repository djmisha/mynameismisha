import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/allPosts"

const IndexPage = () => (	
  <Layout>
   		<SEO title="Home" keywords={[`web designer`,`web developer`, `DJ`, `DJs`, `Misha Osinovskiy`, `San Diego`]} />
   		 	<h1><span role="img" aria-label="emoji">👋👋👋</span> Hello, My name is Misha. <br />Welcome to my personal website!</h1>
   		 	<p>As a Web Developer at Rosemont Media I build websites that look great, load fast, get found on search and function seamlessly on any device.</p>
   		 	<p>As a San Diego DJ I perform at parties, corporate events and weddings playing dance music. <i>Next event: Uncorked Wine Fest Del Mar - June 2019</i></p>
   		 	<p>You can explore here to learn a little more about me. Thank you for stopping by!</p>
			<p><br/><i>Read articles from the blog...</i></p>
    	 <AllPosts />
  </Layout>
)

export default IndexPage
