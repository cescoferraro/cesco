import { Typography } from "@material-ui/core"
import { graphql, navigate } from "gatsby"
import * as React from "react"
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
              <Typography
                style={{}}
                onClick={() => {
                  navigate("/news" + node.fields.slug)
                }}
              >
                {title}
              </Typography>
              <Typography>{node.frontmatter.date}</Typography>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default News

export const pageQuery = graphql`
  query NewsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fileAbsolutePath: { regex: "/content/news/" } }) {
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
