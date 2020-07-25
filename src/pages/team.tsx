import { Typography } from "@material-ui/core"
import { graphql, Link } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"
import { TeamQueryQuery } from "../global"

const About = (props: { data?: TeamQueryQuery }): React.ReactElement => {
  console.log(props)
  const posts = props.data.allMdx.edges
  return (
    <React.Fragment>
      <Typography>Team</Typography>
      <div style={{ margin: "20px 0 40px" }}>
        {[...posts, ...posts, ...posts].map(({ node }, index: number) => {
          const title = node.frontmatter.name || node.fields.slug
          const job = node.frontmatter.job || node.fields.slug
          return (
            <div key={index}>
              <Typography>{title}</Typography>
              <Typography>{job}</Typography>
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

export default About
export const pageQuery = graphql`
  query TeamQuery {
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
