import { graphql, navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: any) => {
  const siteTitle = "Gatsby Starter Personal Website"
  const clients = props.data.allMdx.edges
  console.log(clients)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {
        clients.map((d, i: number)=>{
          return (
            <div key={i}>
              <h2>{d.node.frontmatter.name}</h2>
              <h2>{d.node.frontmatter.title}</h2>
            </div>
          )
        })
      }
      <button
        onClick={() => {
          console.log(33)
          navigate("/client")
        }}
      >
        Go to Blog
      </button>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(filter: {fileAbsolutePath: {regex: "/content/client/"}}) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }

    }
`
