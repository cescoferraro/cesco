import { graphql } from "gatsby"
import * as React from "react"
import SEO from "../components/seo"

class NotFoundPage extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </React.Fragment>
    )
  }
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
