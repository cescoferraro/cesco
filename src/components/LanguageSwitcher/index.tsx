import { Box } from "@material-ui/core"
import * as cs from "classnames"
import React from "react"
import { useTranslation } from "react-i18next"
import { useStylesClasses } from "./LanguageSwitcher"

export const LanguageMenu = ({
  style,
}: {
  style?: React.CSSProperties
}): React.ReactElement => {
  const x = useTranslation()
  const { inactive, active, box } = useStylesClasses()
  const [language, setLanguage] = React.useState("pt-BR")
  const handleChangePT = () => {
    x.i18n
      .changeLanguage("pt-BR")
      .catch((e) => {
        console.log(e)
      })
      .then(() => {
        console.log("yay")
      })
    setLanguage("pt-BR")
  }
  const handleChangeEN = () => {
    x.i18n
      .changeLanguage("en")
      .catch((e) => {
        console.log(e)
      })
      .then(() => {
        console.log("yay")
      })

    setLanguage("en")
  }
  const isEnglish = language === "en"
  const isPortuguese = language === "pt-BR"
  const PTButtonClass = cs({ [inactive]: isEnglish, [active]: isPortuguese })
  const ENButtonClass = cs({ [inactive]: isPortuguese, [active]: isEnglish })
  return (
    <Box style={style} className={box}>
      <button className={PTButtonClass} onClick={() => handleChangePT()}>
        PT
      </button>
      <button className={ENButtonClass} onClick={() => handleChangeEN()}>
        EN
      </button>
    </Box>
  )
}
