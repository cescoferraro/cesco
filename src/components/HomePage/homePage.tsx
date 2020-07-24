import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import { navigate } from "gatsby"
import * as React from "react"
import { Maybe, MdxFrontmatter } from "../../global"
import { withTrans } from "../../i18n/withTrans"
import { HomeTitleComponent } from "./title"

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
})

type Portifolio = { slug: string } & Maybe<
  Pick<MdxFrontmatter, "date" | "title" | "description" | "categorie">
>

interface Props {
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
        <div>
          {Object.keys(projects).map((key, index) => {
            const inner = projects[key] || []
            return (
              <React.Fragment key={index}>
                {inner.map((tile, idx) => {
                  console.log(tile)
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        navigate(tile.categorie + tile.slug)
                      }}
                    >
                      <img
                        alt={"cat-image" + index.toString()}
                        style={{ maxWidth: 200, maxHeight: 200 }}
                        src={require("../../../content/" + tile.image)}
                      />
                      <h2>SDKFJN</h2>
                    </div>
                  )
                })}
              </React.Fragment>
            )
          })}
        </div>
      </React.Fragment>
    )
  },
)
