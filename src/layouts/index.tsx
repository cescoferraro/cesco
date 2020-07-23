import { ThemeProvider } from "@material-ui/core"
import * as React from "react"
import { TranslationProps } from "react-i18next"
import { withTrans } from "../i18n/withTrans"
import { darkTheme, LightMode, lightTheme } from "../shared/theme"
import { ActualLayout } from "./main"

const Layout = (
  props: { uri: string } & TranslationProps,
): React.ReactElement => {
  const [mode, setMode] = React.useState<LightMode>("light")
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

export default withTrans(Layout)
