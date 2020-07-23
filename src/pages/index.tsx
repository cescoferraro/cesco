import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import { HomeQueryQuery } from "../global"
import { HomeComponent } from "./home/home"

interface Props {
  data?: HomeQueryQuery
}

const usePortifolio = (data: HomeQueryQuery) => {
  const all = data.projects.edges.map((d) => d.node.frontmatter)
  return {
    projects: _.groupBy(all, "categorie"),
    categories: Object.keys(_.groupBy(all, "categorie")),
  }
}

const IndexPage = ({ data }: Props): React.ReactElement => {
  const { projects, categories } = usePortifolio(data)
  return <HomeComponent projects={projects} categories={categories} />
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/portifolio/" } }
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
            image
            categorie
          }
        }
      }
    }
  }
`
