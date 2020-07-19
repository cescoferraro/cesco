import React, { Fragment } from "react"
import { Container } from '@material-ui/core'
import ThemeSwitch from "../components/themeSwitch"
import LangSwitch from "../components/langSwitch"


export default function componentes() {
  return (
    <Fragment>
        <Container style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <ThemeSwitch />
            <LangSwitch />
        </Container>
    </Fragment>
  )
}
