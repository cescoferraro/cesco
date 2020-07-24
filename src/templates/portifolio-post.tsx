import { graphql, Link } from "gatsby"
import React from "react"
import { SitePageContext } from "../global"
import { rhythm, scale } from "../utils/typography"

const PortifolioPostTemplate = (props: {
  data?: any
  pageContext: SitePageContext
}): React.ReactElement => {
  const post = props.data.mdx
  const { previous, next } = props.pageContext
  console.log(props.pageContext)

  return (
    <React.Fragment>
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={`..${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`..${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </React.Fragment>
  )
}

export default PortifolioPostTemplate

export const pageQuery = graphql`
  query PortifolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
