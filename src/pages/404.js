import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    <h2>Noob needs a QueryParameter in the web address</h2>
    <p>Valid addresses are</p>
    <ul>
      <li><a href="http://localhost:8000?artist=bayside">http://localhost:8000?artist=bayside</a></li>
      <li><a href="http://localhost:8000?artist=migos">http://localhost:8000?artist=migos</a></li>
      <li><a href="http://localhost:8000?artist=outkast">http://localhost:8000?artist=outkast</a></li>
    </ul> 
  </Layout>
)

export default NotFoundPage
