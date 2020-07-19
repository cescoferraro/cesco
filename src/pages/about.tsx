import { graphql, Link, navigate } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"
import SEO from "../components/Seo/seo"
import { AboutQueryQuery } from "../global"
import { rhythm } from "../utils/typography"

const About = (props: { data?: AboutQueryQuery } & any) => {
  console.log(props)
  const posts = props.data.allMdx.edges
  return (
    <React.Fragment>
      <SEO title="All posts" />
      <div style={{ margin: "20px 0 40px" }}>
        <h2>we are hell a coll!</h2>

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
                hello
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
    </React.Fragment>
  )
}

export default About
export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
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
