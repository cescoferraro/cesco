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
      <h2>Team</h2>
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }, index: number) => {
          const title = node.frontmatter.name || node.fields.slug
          const job = node.frontmatter.job || node.fields.slug
          return (
            <div key={index}>
              <h4>{title}</h4>
              <p>{job}</p>
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
    allMdx(filter: { fileAbsolutePath: { regex: "/content/team/" } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            name
            job
          }
        }
      }
    }
  }
`
