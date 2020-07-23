import { Box, Typography } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { graphql } from "gatsby"
import _ from "lodash"
import * as React from "react"
import SEO from "../components/Seo/seo"
import { HomeQueryQuery } from "../global"
import { withTrans } from "../i18n/withTrans"

interface Props {
  children: React.ReactElement
  value: index
  index: number
  title: string
}

const TabPanel = ({ title, children, index, value }: Props) => {
  console.log(index, value)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{title}</Typography>
          {children}
        </Box>
      )}
    </div>
  )
}
const IndexPage = (props: { data?: HomeQueryQuery }): React.ReactElement => {
  const projects = props.data.projects.edges
  const actualProject = projects.map((d) => d.node.frontmatter)
  const allProjects = _.groupBy(actualProject, "categorie")
  const categories = Object.keys(allProjects)
  console.log(categories)
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => setValue(newValue)
  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  })
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {categories.map((d, index) => {
            return <Tab key={index} label={d} {...a11yProps(index)} />
          })}
        </Tabs>
      </AppBar>
      {categories.map((categorie, index) => {
        const categorieProjects = allProjects[categorie]
        return (
          <TabPanel title={categorie} key={index} value={value} index={index}>
            {categorieProjects.map((project, index) => {
              return (
                <div key={index}>
                  <h2> {project.title} </h2>
                  <h2> {project.image} </h2>
                </div>
              )
            })}
          </TabPanel>
        )
      })}
    </React.Fragment>
  )
}

export default withTrans(IndexPage)

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
