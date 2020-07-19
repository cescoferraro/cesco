import { createMuiTheme, ThemeOptions, ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { Waypoint } from "react-waypoint"
import Footer from "../components/footer"
import LeftDrawer from "../components/leftDrawer"
import RightDrawer from "../components/rightDrawer"
import TopMenu from "../components/topMenu"
import { useStyles } from "./styles"

export type LightMode = "light" | "dark"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
  }
}

const darkPalette = {
  primary: { main: "#000" },
  secondary: { main: "#000" },
}
const lightPalette = {
  primary: { main: "#FFF" },
  secondary: { main: "#FFF" },
}

const lightOptions: ThemeOptions = {
  palette: lightPalette,
  themeName: "light" as LightMode,
}
const lightTheme = createMuiTheme(lightOptions)
const darkOptions = { palette: darkPalette, themeName: "dark" as LightMode }
const darkTheme = createMuiTheme(darkOptions)

function ActualLayout(props: {
  open: boolean
  uri: any
  lightMode: "light" | "dark"
  toggleLightMode: () => void
  onEnter: () => void
  onLeave: () => void
  children: any
}) {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <RightDrawer open={props.open} uri={props.uri} />
      <LeftDrawer open={props.open} uri={props.uri} />
      <TopMenu
        lightMode={props.lightMode}
        uri={props.uri}
        toggleLightMode={props.toggleLightMode}
      />
      <Waypoint onEnter={props.onEnter} onLeave={props.onLeave} />

      <div className={classes.root}>
        <h2>{props.open ? "open" : "close"}</h2>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

const Layout = (props: any) => {
  console.log(props)
  const { children } = props
  const [open, setDrawerOpen] = React.useState(false)
  const [lightMode, setLightMode] = React.useState<LightMode>("light")
  return (
    <ThemeProvider theme={lightMode === "light" ? lightTheme : darkTheme}>
      <ActualLayout
        open={open}
        uri={props.uri}
        lightMode={lightMode}
        toggleLightMode={() =>
          setLightMode(lightMode === "light" ? "dark" : "light")
        }
        onEnter={() => {
          console.log("onEnter")
          setDrawerOpen(false)
        }}
        onLeave={() => {
          setDrawerOpen(true)
          console.log("onLeave")
        }}
        children={children}
      />
    </ThemeProvider>
  )
}

export default Layout
