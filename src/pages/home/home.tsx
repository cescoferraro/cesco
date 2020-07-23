import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import InfoIcon from "@material-ui/icons/Info"
import * as React from "react"
import SEO from "../../components/Seo/seo"
import { Maybe, MdxFrontmatter } from "../../global"
import { withTrans } from "../../i18n/withTrans"
import { TabPanel } from "./tab_panel"
import { HomeTitleComponent } from "./title"

const useStyles = makeStyles((theme: Theme) => ({
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

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})

interface Props {
  projects: Maybe<Pick<MdxFrontmatter, "date" | "title" | "description">>[]
  categories: string[]
}

export const HomeComponent = withTrans(({ categories, projects }: Props) => {
  const classes = useStyles()
  const [value, setValue] = React.useState<number>(0)
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <HomeTitleComponent />
      <Tabs
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        aria-label="simple tabs example"
      >
        {categories.map((d, index) => {
          return <Tab key={index} label={d} {...a11yProps(index)} />
        })}
      </Tabs>
      <Select
        value={value}
        onChange={(er) => {
          setValue(Number(er.target.value))
        }}
      >
        {categories.map((d, index) => {
          return (
            <MenuItem key={index} value={index}>
              {d}
            </MenuItem>
          )
        })}
      </Select>
      {categories.map((categorie, index) => {
        const categorieProjects = projects[categorie]
        return (
          <TabPanel key={index} value={value} index={index}>
            <GridList cellHeight={180} className={classes.gridList}>
              {categorieProjects.map((tile) => (
                <GridListTile key={tile.image}>
                  <img
                    src={require("../../../content/" + tile.image)}
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
})
