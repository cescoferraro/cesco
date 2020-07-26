import { graphql } from "gatsby"
import React from "react"
import { ClientPage } from "../components/ClientPage/clientPage"

const Clients = (props: {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  data: any
}): React.ReactElement => {
  const clients = props.data.allMdx.edges.map((f) => f.node.frontmatter)
  return <ClientPage clients={clients} />
}

export default Clients

export const clientQueryV2 = graphql`
  query ClientQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/client/" } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD YYYY")
            name
            description
            image
          }
        }
      }
    }
  }
`
