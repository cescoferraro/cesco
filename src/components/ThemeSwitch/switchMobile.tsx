import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import * as cs from "classnames"
import { LightMode } from "../../shared/theme"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
}

export const useStylesClasses = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 120,
    },
    box: {
      width: 25,
      height: 40,
      border: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    inactive: {
      height: 15,
      width: 15,
      background: "#c4c4c4",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
    },
    active: {
      height: 15,
      width: 15,
      background: "#FFF",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
    },
  }),
)

export function ThemeSwitchMobile({
  lightMode,
  toggleLightMode,
}: Props): React.ReactElement {
  const classes = useStylesClasses()

  const { inactive, active } = useStylesClasses()
  const LMButtonClass = cs({
    [inactive]: !lightMode,
    [active]: lightMode,
  })
  const DMButtonClass = cs({
    [inactive]: lightMode,
    [active]: !lightMode,
  })

  const label = lightMode === "light" ? "DARK MODE" : "LIGHT MODE"

  return (
    <Box className={classes.container}>
      <Typography style={{ fontSize: 10, width: 70, color: "#fff" }}>
        {label}
      </Typography>
      <Box className={classes.box}>
        <button onClick={toggleLightMode} className={LMButtonClass} />
        <button onClick={toggleLightMode} className={DMButtonClass} />
      </Box>
    </Box>
  )
}
