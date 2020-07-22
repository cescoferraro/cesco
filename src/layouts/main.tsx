import * as React from "react"
import { Waypoint } from "react-waypoint"
import Footer from "../components/LayoutFooter/footer"
import LeftDrawer from "../components/LayoutLeftDrawer/leftDrawer"
import RightDrawer from "../components/LayoutRightDrawer/rightDrawer"
import LayoutHeader from "../components/LayoutHeader/layoutHeader"
import LayoutHeaderMobile from "../components/LayoutHeader/layoutHeaderMobile"
import { useStyles } from "./styles"

interface Props {
  uri: string
  lightMode: "light" | "dark"
  toggleLightMode: () => void
  children: React.ReactElement
}

export const ActualLayout = ({
  children,
  lightMode,
  toggleLightMode,
  uri,
}: Props) => {
  const [open, setDrawerOpen] = React.useState(false)
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <RightDrawer open={open} uri={uri} />
      <LeftDrawer open={open} uri={uri} />
      <LayoutHeaderMobile
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <LayoutHeader
        lightMode={lightMode}
        uri={uri}
        toggleLightMode={toggleLightMode}
      />
      <Waypoint
        onEnter={() => setDrawerOpen(false)}
        onLeave={() => setDrawerOpen(true)}
      />
      <div className={classes.root}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
