import React from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Artist from '../components/artist'
import URLSearchParams from 'url-search-params'

const IndexPage = ({data}) => {
  console.log(data)

  //const urlParams = new URLSearchParams(typeof(window) ==! "undefined" ? window.location.search : window.location.search)
  const urlParams = new URLSearchParams(window.location.search)
  //const urlParams = new URLSearchParams("")
  const myParam = urlParams.get('artist')
  //alert(myParam)
  var band
  if (myParam) {
    for (var i = 0; i < data.allArtistJson.edges.length; i++) {
      if (data.allArtistJson.edges[i].node.Name.toLowerCase() === myParam.toLowerCase()) {
        band = data.allArtistJson.edges[i].node
      }
    }
  } else {
    navigate('/404/')
    return null
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Artist band={band}/>
   

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    allArtistJson {
      edges {
        node { 
          Name
          Origin
          Genre
          Image
          Biography
        }
      }
    } 
  }
`
