import * as React from "react"
import { withTrans } from "../../i18n/withTrans"
import { HomeGrid } from "./grid"
import { DesktopTabs } from "./select_desktop"
import { MobileSelect } from "./select_mobile"
import { HomeTitleComponent } from "./title"
import { Portifolio } from "./types"
import "./index.css"

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  all: any[]
  projects: { [key]: Portifolio[] }
  categories: string[]
}
const alphabetically = (a, b) => {
  if (a > b) return 1
  if (b > a) return -1
  return 0
}

export const HomePage = withTrans(
  ({ categories, projects }: Props): React.ReactElement => {
    const [val, setVal] = React.useState<number>(0)
    categories = categories.sort(alphabetically)
    console.log(projects, categories)
    return (
      <React.Fragment>
        <HomeTitleComponent />
        <DesktopTabs setValue={setVal} value={val} categories={categories} />
        <MobileSelect setValue={setVal} value={val} categories={categories} />
        <HomeGrid projects={projects} value={categories[val]} />
      </React.Fragment>
    )
  },
)
