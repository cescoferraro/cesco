import { Box } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import InfoIcon from "@material-ui/icons/Info"
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
}

const TabPanel = ({ children, index, value }: Props) => {
  console.log(index, value)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}))

const IndexPage = (props: { data?: HomeQueryQuery }): React.ReactElement => {
  const projects = props.data.projects.edges
  const actualProject = projects.map((d) => d.node.frontmatter)
  const allProjects = _.groupBy(actualProject, "categorie")
  const categories = Object.keys(allProjects)
  console.log(props)
  console.log(categories)
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => setValue(newValue)
  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  })
  const classes = useStyles()

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
          <TabPanel key={index} value={value} index={index}>
            <GridList cellHeight={180} className={classes.gridList}>
              {categorieProjects.map((tile) => (
                <GridListTile key={tile.image}>
                  <img
                    src={require("../../content/" + tile.image)}
                    alt={tile.image}
                  />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.description}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
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
