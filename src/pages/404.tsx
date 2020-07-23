import { graphql } from "gatsby"
import * as React from "react"
import SEO from "../components/Seo/seo"
import { Site } from "../global"

const NotFoundPage = ({
  data,
}: {
  data?: { site: Site }
}): React.ReactElement => {
  return (
    <React.Fragment>
      <SEO title="404: Not Found" />
      <h1>{data.site.siteMetadata.title}</h1>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </React.Fragment>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
