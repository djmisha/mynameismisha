import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllPosts from "../components/allPosts"

const IndexPage = () => (
  <Layout>
   		<SEO title="Misha Osinovskiy" keywords={[`web designer`,`web developer`, `DJ`, `Misha Osinovskiy`]} />
   		 	<p>👋👋👋 Hello!  My name is Misha and I would like to welcome you to my personal website.</p>
   		 	<p>As a Web Developer at Rosemont Media I build websites that look great, load fast, get found on search and function seamlessly on any device.</p>
   		 	<p>As a San Diego DJ I perform at parties, corporate events and weddings playing dance music. <br /> Next event: Uncorked Wine Fest Del Mar - June 2019</p>
   		 	<p>You can explore here to learn a little more about me. Thank you for stopping by!</p>
			<p><br/><i>Read articles from the blog...</i></p>
    	 <AllPosts />
  </Layout>
)

export default IndexPage
