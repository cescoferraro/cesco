import { Paper, Switch } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import { LightMode } from "../../shared/theme"

const stylesYellowSwitch = {
  root: {
    width: 30,
    height: 17,
    padding: 0,
    display: "flex",
    transform: "rotate(-90deg)",
  },
  switchBase: {
    padding: 0,
    color: "white",
    "&$checked": {
      transform: "translateX(13px)",
      color: "white",
      "& + $track": {
        opacity: 1,
        backgroundColor: "#FFCC00",
      },
    },
  },
  thumb: {
    width: 17,
    height: 17,
    border: "1px solid #E8E8E8",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.15)",
  },
  track: {
    margin: 1,
    width: 30,
    height: 15,
    backgroundColor: "#FFCC00",
    border: `none`,
    boxShadow: "inset 0px 0px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: 16 / 2,
    opacity: 1,
  },
  checked: {},
}

const YellowSwitch = ({
  checked,
  onChange,
  name,
}: {
  checked: boolean
  onChange: (event: Event) => void
  name: string
}): React.ReactElement => {
  const classes = makeStyles(() => createStyles(stylesYellowSwitch))()
  return (
    <Switch
      classes={classes}
      name={name}
      onChange={onChange}
      checked={checked}
    />
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  switchPaper: {
    width: 50,
    height: 90,
    borderRadius: 0,
    background: theme.palette.grey.A200,
    boxShadow: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const SwitchPaper = ({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement => {
  const classes = useStyles()
  return <Paper className={classes.switchPaper}>{children}</Paper>
}
const IconBox = ({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement => {
  const classes = makeStyles(() =>
    createStyles({
      root: {
        margin: "0px 8px",
        height: 16,
        background: "transparent",
        boxShadow: "none",
      },
    }),
  )()
  return <Paper className={classes.root}>{children}</Paper>
}

export const ThemeSwitch = ({
  lightMode,
  toggleLightMode,
}: {
  lightMode: LightMode
  toggleLightMode: () => void
}): React.ReactElement => {
  const svgFill = { fill: lightMode === "light" ? "#000" : "#FFF" }
  return (
    <SwitchPaper>
      <IconBox>
        <svg width="16" height="20">
          <path
            d="M8.66669 3.28716C8.44895 3.25688 8.22637 3.24121 8.00002 3.24121C7.77367 3.24121 7.55109 3.25688 7.33335 3.28716V0.677323C7.55293 0.658083 7.77529 0.648254 8.00002 0.648254C8.22475 0.648254 8.44711 0.658083 8.66669 0.677323V3.28716ZM4.66669 7.77888C4.66669 9.56895 6.15907 11.0201 8.00002 11.0201C9.84097 11.0201 11.3334 9.56895 11.3334 7.77888C11.3334 5.98882 9.84097 4.53769 8.00002 4.53769C6.15907 4.53769 4.66669 5.98882 4.66669 7.77888ZM10 7.77888C10 8.85292 9.10459 9.7236 8.00002 9.7236C6.89545 9.7236 6.00002 8.85292 6.00002 7.77888C6.00002 6.70485 6.89545 5.83417 8.00002 5.83417C9.10459 5.83417 10 6.70485 10 7.77888ZM8.66669 14.8804V12.2706C8.44895 12.3009 8.22637 12.3166 8.00002 12.3166C7.77367 12.3166 7.55109 12.3009 7.33335 12.2706V14.8804C7.55293 14.8997 7.77529 14.9095 8.00002 14.9095C8.22475 14.9095 8.44711 14.8997 8.66669 14.8804ZM12.6194 7.13065H15.3034C15.3232 7.34415 15.3333 7.56037 15.3333 7.77888C15.3333 7.9974 15.3232 8.21362 15.3034 8.42712H12.6194C12.6506 8.21541 12.6667 7.99898 12.6667 7.77888C12.6667 7.55879 12.6506 7.34236 12.6194 7.13065ZM3.33335 7.77888C3.33335 7.55879 3.34947 7.34236 3.38061 7.13065H0.696582C0.676795 7.34415 0.666687 7.56037 0.666687 7.77888C0.666687 7.9974 0.676795 8.21362 0.696582 8.42712H3.38061C3.34947 8.21541 3.33335 7.99898 3.33335 7.77888ZM10.7948 4.14461L12.6927 2.29914C13.0347 2.57638 13.3504 2.88332 13.6355 3.21589L11.7376 5.06136C11.4699 4.71384 11.1522 4.40488 10.7948 4.14461ZM2.3645 3.21589L4.26242 5.06136C4.5301 4.71384 4.84783 4.40488 5.20523 4.14461L3.30731 2.29914C2.96528 2.57638 2.64962 2.88332 2.3645 3.21589ZM11.7376 10.4964L13.6355 12.3419C13.3504 12.6744 13.0347 12.9814 12.6927 13.2586L10.7948 11.4132C11.1522 11.1529 11.4699 10.8439 11.7376 10.4964ZM3.30731 13.2586L5.20523 11.4132C4.84783 11.1529 4.5301 10.8439 4.26242 10.4964L2.3645 12.3419C2.64962 12.6744 2.96528 12.9814 3.30731 13.2586Z"
            fill={svgFill.fill}
          />
        </svg>
      </IconBox>
      <YellowSwitch
        checked={lightMode === "light"}
        onChange={() => {
          toggleLightMode()
        }}
        name="checked"
      />
      <IconBox>
        <svg width="16" height="20">
          <path
            d="M8.66667 5.83419C8.66667 4.55418 9.21364 3.36099 10.1599 2.50717L11.1449 1.61831L9.82112 1.39343C9.44229 1.32908 9.05645 1.29648 8.66667 1.29648C4.98477 1.29648 2 4.19877 2 7.77892C2 11.3591 4.98477 14.2614 8.66667 14.2614C10.9236 14.2614 12.9895 13.1618 14.2177 11.3699L14.9621 10.2839L13.6224 10.3634C13.5265 10.369 13.4301 10.3719 13.3333 10.3719C10.756 10.3719 8.66667 8.3403 8.66667 5.83419ZM8.66667 12.9649C5.72115 12.9649 3.33333 10.643 3.33333 7.77892C3.33333 5.02253 5.5449 2.7684 8.33676 2.60273C7.69112 3.5449 7.33333 4.66206 7.33333 5.83419C7.33333 8.71175 9.4758 11.1027 12.2943 11.5812C11.3252 12.4562 10.0406 12.9649 8.66667 12.9649Z"
            fill={svgFill.fill}
          />
        </svg>
      </IconBox>
    </SwitchPaper>
  )
}
