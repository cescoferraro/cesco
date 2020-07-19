import { createMuiTheme, ThemeOptions } from "@material-ui/core"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
  }
}

export type LightMode = "light" | "dark"
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
export const lightTheme = createMuiTheme(lightOptions)
const darkOptions = { palette: darkPalette, themeName: "dark" as LightMode }
export const darkTheme = createMuiTheme(darkOptions)
