import React, { Fragment } from "react"
import { Container } from "@material-ui/core"
import { ThemeSwitch } from "../components/ThemeSwitch/switch"
import { ThemeSwitchMobile } from "../components/ThemeSwitch/switchMobile"
import { LightMode } from "src/shared/theme"
import { LanguageSwitcher } from "../components/LanguageSwitcher/LanguageSwitcher"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
}

const componentes = ({
  lightMode,
  toggleLightMode,
}: Props): React.ReactElement => {
  return (
    <Fragment>
      <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
        <LanguageSwitcher />
        <ThemeSwitch lightMode={lightMode} toggleLightMode={toggleLightMode} />
        <Container style={{ background: "rgba(0, 0, 0, 0.81)" }}>
          <ThemeSwitchMobile />
        </Container>
      </Container>
    </Fragment>
  )
}

export default componentes
