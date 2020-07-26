import { WithWidthProps } from "@material-ui/core"
import withWidth from "@material-ui/core/withWidth"
import { graphql } from "gatsby"
import * as React from "react"
import { TeamPage } from "../components/TeamPage/teamPage"
import { TeamQueryQuery } from "../global"

const Team = withWidth()(
  (props: { data?: TeamQueryQuery } & WithWidthProps): React.ReactElement => {
    return <TeamPage employees={props.data.allMdx.edges} />
  },
)

export default Team

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
            image
          }
        }
      }
    }
  }
`
