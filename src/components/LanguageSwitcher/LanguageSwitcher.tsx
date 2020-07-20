import React, { Fragment } from "react"
import { Box } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import * as cs from "classnames"

export const useStylesClasses = makeStyles(() =>
  createStyles({
    box: {
      width: 60,
      border: "none",
      display: "flex",
    },
    inactive: {
      fontSize: 12,
      height: 30,
      width: 30,
      background: "white",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
      "&:hover": {
        background: "white",
        boxShadow: "0px 0px 0px 2px #FFCC00 inset",
      },
    },
    active: {
      fontSize: 12,
      height: 30,
      width: 30,
      background: "#FFCC00",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
      "&:hover": {
        background: "#FFCC00",
        boxShadow: "0px 0px 0px 2px #FFCC00 inset",
      },
    },
  }),
)

export function LanguageSwitcher() {
  const classes = useStylesClasses()

  const [state, setState] = React.useState({
    PT: true,
    EN: false,
  })

  const handleChangePT = () => {
    setState({ PT: true, EN: false })
  }

  const handleChangeEN = () => {
    setState({ PT: false, EN: true })
  }

  const { inactive, active } = useStylesClasses()
  const PTButtonClass = cs({
    [inactive]: state.EN,
    [active]: state.PT,
  })
  const ENButtonClass = cs({
    [inactive]: !state.EN,
    [active]: !state.PT,
  })

  return (
    <Fragment>
      <Box className={classes.box}>
        <button onClick={handleChangePT} className={PTButtonClass}>
          PT
        </button>
        <button onClick={handleChangeEN} className={ENButtonClass}>
          EN
        </button>
      </Box>
    </Fragment>
  )
}
