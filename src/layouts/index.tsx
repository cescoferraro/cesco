import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { darkTheme, LightMode, lightTheme } from "../shared/theme"
import "./global.css"
import { ActualLayout } from "./main"

const Layout = (props: { uri: string }): React.ReactElement => {
  const [mode, setMode] = React.useState<LightMode>("dark")
  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <ActualLayout
        uri={props.uri}
        lightMode={mode}
        toggleLightMode={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {props.children}
      </ActualLayout>
    </ThemeProvider>
  )
}

export default Layout
