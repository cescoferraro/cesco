import { graphql, Link, navigate } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"
import { BlogQueryQuery } from "../global"

const News = (props: { data?: BlogQueryQuery }): React.ReactElement => {
  const { data } = props
  const posts = data.allMdx.edges
  return (
    <React.Fragment>
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }, index: number) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={index}>
              <a
                style={{}}
                onClick={() => {
                  navigate("/portifolio" + node.fields.slug)
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
        <Button>Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default News

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/portifolio/" } }) {
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
