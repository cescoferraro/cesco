import { Button, Typography } from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: any) => {
  const siteTitle = "Agencia Global"
  console.log(props.data)
  // const clients = []
  const clients = props.data.clients.edges
  const news = props.data.news.edges
  const projects = props.data.projects.edges
  // console.log(clients)
  // console.log(projects)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <h2>News</h2>
      {
        news.map((d, i: number) => {
          return (
            <div key={i}>
              <Typography>{`#${i.toString()} ${d.node.frontmatter.title} ${d.node.frontmatter.description}`}</Typography>

              <Button
                onClick={() => {
                  navigate("/news" + d.node.fields.slug)
                }}
              >
                GO

              </Button>
            </div>
          )
        })
      }
      <h2>Projetos</h2>
      {
        projects.map((d, i: number) => {
          return (
            <div key={i}>
              <Typography>{`#${i.toString()} ${d.node.frontmatter.title} ${d.node.frontmatter.description}`}</Typography>

              <Button
                onClick={() => {
                  navigate("/portifolio" + d.node.fields.slug)
                }}
              >
                GO

              </Button>
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
        clients: allMdx(
            filter: {fileAbsolutePath: {regex: "/content/client/"}}
        ) {
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
        projects: allMdx(
            filter: {fileAbsolutePath: {regex: "/content/portifolio/"}}
        ) {
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
        news: allMdx(filter: {fileAbsolutePath: {regex: "/content/news/"}}) {
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
