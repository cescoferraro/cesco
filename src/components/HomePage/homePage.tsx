import { Hidden } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { navigate } from "gatsby"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Maybe, MdxFrontmatter } from "../../global"
import { withTrans } from "../../i18n/withTrans"
import { HomeTitleComponent } from "./title"
import "./index.css"

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})

type Portifolio = { slug: string } & Maybe<
  Pick<MdxFrontmatter, "date" | "title" | "description" | "categorie">
>

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  all: any[]
  projects: { [key]: Portifolio[] }
  categories: string[]
}

export const HomePage = withTrans(
  ({ categories, projects }: Props): React.ReactElement => {
    const [value, setValue] = React.useState<number>(0)
    return (
      <React.Fragment>
        <HomeTitleComponent />
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="simple tabs example"
          >
            {categories.map((d, index) => {
              return <Tab key={index} label={d} {...a11yProps(index)} />
            })}
          </Tabs>
        </Hidden>
        <Hidden smUp>
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
        </Hidden>
        <Masonry
          breakpointCols={{ default: 2, 700: 1 }}
          className="global-home-grid"
          columnClassName="global-home-grid-column"
        >
          {Object.keys(projects).map((key, index) => {
            const inner = projects[key] || []
            return (
              <React.Fragment key={index}>
                {inner
                  .filter((tile, idx) => idx === value)
                  .map((tile, idx) => {
                    console.log(tile)
                    return (
                      <img
                        key={idx}
                        src={`${require("../../../content/" + tile.image)}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          maxHeight: 300,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                        onClick={() => {
                          navigate(tile.categorie + tile.slug)
                        }}
                      />
                    )
                  })}
              </React.Fragment>
            )
          })}
        </Masonry>
      </React.Fragment>
    )
  },
)
