import { Box } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import * as cs from "classnames"
import { useI18next } from "gatsby-plugin-react-i18next"
import React, { Fragment } from "react"

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
      background: "transparent",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
      "&:hover": {
        background: "transparent",
        boxShadow: "0px 0px 0px 2px #FFCC00 inset",
      },
    },
    active: {
      fontSize: 12,
      height: 30,
      color: "black",
      width: 30,
      background: "#FFCC00",
      borderRadius: 0,
      border: "none",
      outline: "none !important",
      "& p": {
        color: "black",
      },
      "&:hover": {
        background: "#FFCC00",
        boxShadow: "0px 0px 0px 2px #FFCC00 inset",
      },
    },
  }),
)

interface Props {
  style?: React.CSSProperties
}

export const LanguageSwitcher = ({ style }: Props): React.ReactElement => {
  const classes = useStylesClasses()
  const { changeLanguage, language } = useI18next()
  // const [language, setState] = React.useState(language)
  const handleChangePT = () => {
    void changeLanguage("pt")
  }
  const handleChangeEN = () => {
    void changeLanguage("en")
  }
  const { inactive, active } = useStylesClasses()
  const isEnglish = language === "en"
  const isPortuguese = language === "pt"
  const PTButtonClass = cs({ [inactive]: isEnglish, [active]: isPortuguese })
  const ENButtonClass = cs({
    [inactive]: !isEnglish,
    [active]: !isPortuguese,
  })
  return (
    <Fragment>
      <Box style={style} className={classes.box}>
        <button onClick={handleChangePT} className={PTButtonClass}>
          <Typography>PT</Typography>
        </button>
        <button onClick={handleChangeEN} className={ENButtonClass}>
          <Typography>EN</Typography>
        </button>
      </Box>
    </Fragment>
  )
}
