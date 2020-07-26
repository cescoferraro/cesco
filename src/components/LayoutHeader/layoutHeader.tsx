import { Container, Hidden } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { Link } from "gatsby-plugin-react-i18next"
import React, { Fragment } from "react"
import { LightMode } from "shared/theme"
import logoblack from "../../../static/logo-black.png"
import logo from "../../../static/logo-white.png"
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher"
import { TabComponent } from "../TabComponent/drawerItem"
import { ThemeSwitch } from "../ThemeSwitch/switch"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
  uri: string
}

const LayoutHeader = ({
  lightMode,
  uri,
  toggleLightMode,
}: Props): React.ReactElement => {
  return (
    <Fragment>
      <Hidden smDown>
        <Container
          style={{
            display: "flex",
            maxWidth: "1280px",
            alignItems: "flex-end",
            height: 155,
          }}
        >
          <Container style={{ alignContent: "flex-start" }}>
            <Link style={{ boxShadow: "none" }} to="/">
              <img
                src={lightMode === "light" ? logoblack : logo}
                alt="logo-black"
                style={{ margin: 16, height: 100 }}
              />
            </Link>
          </Container>
          <Container style={{ display: "flex" }}>
            <ul
              style={{
                color: "#AAA",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                padding: 8,
              }}
            >
              <TabComponent page={"/"} uri={uri} label={"WORKS"} />
              <TabComponent page={"/about"} uri={uri} label={"ABOUT"} />
              <TabComponent page={"/news"} uri={uri} label={"NEWS"} />
              <TabComponent page={"/team"} uri={uri} label={"TEAM"} />
              <TabComponent page={"/clients"} uri={uri} label={"CLIENTES"} />
              <TabComponent page={"/contact"} uri={uri} label={"CONTACT"} />
              <br />
              <LanguageSwitcher style={{ paddingLeft: 24 }} />
            </ul>
          </Container>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <ThemeSwitch
              lightMode={lightMode}
              toggleLightMode={toggleLightMode}
            />
          </Box>
        </Container>
      </Hidden>
    </Fragment>
  )
}

export default LayoutHeader
