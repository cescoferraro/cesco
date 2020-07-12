import { graphql, Link, navigate } from "gatsby"
import * as React from "react"

import Bio from "../components/bio"
import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogQueryQuery } from "../global"
import { rhythm } from "../utils/typography"

const News = (props: { data?: BlogQueryQuery } & any) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  console.log(data)
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts"/>
      <Bio/>
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }, index: number) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={index}>
              <a
                style={{
                  marginBottom: rhythm(1 / 4),
                }}

                onClick={() => {
                  navigate("/news" + node.fields.slug)
                }}
              >
                {title}
              </a>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
      <Link to="/">
        <Button marginTop="85px">Go Home</Button>
      </Link>
    </Layout>
  )
}

export default News

export const pageQuery = graphql`
    query NewsQuery{
        site {
            siteMetadata {
                title
            }
        }
        allMdx(
            filter: {fileAbsolutePath: {regex: "/content/news/"}}
        ) {
            totalCount
            edges {
                node {
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
    }
`
