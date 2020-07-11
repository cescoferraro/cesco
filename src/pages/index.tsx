import { Typography } from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: any) => {
  const siteTitle = "Gatsby Starter Personal Website"
  console.log(props.data)
  // const clients = []
  const clients = props.data.allMdx.edges
  const portifolio = props.data.portifolio.edges
  // console.log(clients)
  // console.log(portifolio)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h2>Projetos</h2>
      {
        portifolio.map((d, i: number) => {
          return (
            <div key={i}>
              <Typography>{`#${i.toString()} ${d.node.frontmatter.title} ${d.node.frontmatter.description}`}</Typography>
            </div>
          )
        })
      }
      <h2>CLIENTES</h2>
      {
        clients.map((d, i: number) => {
          return (
            <div key={i}>
              <Typography>{`#${i.toString()} ${d.node.frontmatter.name} ${d.node.frontmatter.description}`}</Typography>
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
        portifolio : allMdx(filter: {fileAbsolutePath: {regex: "/content/portifolio/"}}) {
            edges {
                node {
                    fileAbsolutePath
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
        allMdx : allMdx(filter: {fileAbsolutePath: {regex: "/content/client/"}}) {
            edges {
                node {
                    fileAbsolutePath
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
