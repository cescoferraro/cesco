import React, { Fragment } from "react"
import { Container } from "@material-ui/core"
import { ThemeSwitch } from "../components/ThemeSwitch/switch"
import { LanguageSwitcher } from "../components/LanguageSwitcher/LanguageSwitcher"

export default function componentes() {
  return (
    <Fragment>
      <Container style={{ display: "flex", justifyContent: "space-evenly" }}>
        <LanguageSwitcher />
        <ThemeSwitch />
      </Container>
    </Fragment>
  )
}
