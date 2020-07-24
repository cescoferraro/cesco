import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import { HomePage } from "../components/HomePage/homePage"
import { HomeQueryQuery } from "../global"

interface Props {
  data?: HomeQueryQuery
}

const usePortifolio = (data: HomeQueryQuery) => {
  const all = data.projects.edges.map((d) => ({
    ...d.node.frontmatter,
    slug: d.node.fields.slug,
  }))
  return {
    all,
    projects: _.groupBy(all, "categorie"),
    categories: Object.keys(_.groupBy(all, "categorie")),
  }
}

const IndexPage = ({ data }: Props): React.ReactElement => {
  console.log("natal")
  const { projects, categories, all } = usePortifolio(data)
  return <HomePage all={all} projects={projects} categories={categories} />
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
