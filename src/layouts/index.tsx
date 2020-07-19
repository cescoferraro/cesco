import * as React from "react"
import { Waypoint } from "react-waypoint"
import Footer from "../components/footer"
import LeftDrawer from "../components/leftDrawer"
import RightDrawer from "../components/rightDrawer"
import TopMenu from "../components/topMenu"
import { useStyles } from "./styles"

const Layout = (props: any) => {
  console.log(props)
  const { children } = props
  const classes = useStyles()
  const [open, setDrawerOpen] = React.useState(false)
  return (
    <div className={classes.wrapper}>
      <RightDrawer open={open} uri={props.uri} />
      <LeftDrawer open={open} uri={props.uri} />
      <TopMenu uri={props.uri} />
      <Waypoint
        onEnter={() => {
          console.log("onEnter")
          setDrawerOpen(false)
        }}
        onLeave={() => {
          setDrawerOpen(true)
          console.log("onLeave")
        }}
      />

      <div className={classes.root}>
        <h2>{open ? "open" : "close"}</h2>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
