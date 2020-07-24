import { createMuiTheme, ThemeOptions } from "@material-ui/core"

declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName?: LightMode
  }
}

export type LightMode = "light" | "dark"
const darkPalette = {
  primary: { main: "#000" },
  secondary: { main: "#FFF" },
  grey: {
    A100: "rgba(255, 255, 255, 0.6)",
    A200: "#232323",
  },
}
const lightPalette = {
  primary: { main: "#FFF" },
  secondary: { main: "#000" },
  grey: {
    A100: "rgba(0, 0, 0, 0.6)",
    A200: "#E5E5E5",
  },
}
const lightOptions: ThemeOptions = {
  palette: lightPalette,
  themeName: "light" as LightMode,
}
export const lightTheme = createMuiTheme(lightOptions)
const darkOptions = { palette: darkPalette, themeName: "dark" as LightMode }
export const darkTheme = createMuiTheme(darkOptions)
