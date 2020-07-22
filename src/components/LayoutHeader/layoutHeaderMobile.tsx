import React, { Fragment, useState } from "react"
import { Hidden, Container, Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, navigate } from "gatsby"
import { LightMode } from "src/shared/theme"
import logo from "../../../static/logo-white.png"
import logoblack from "../../../static/logo-black.png"
import { ThemeSwitch } from "../ThemeSwitch/switch"
import * as cs from "classnames"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
  uri: string
  label: string
  page: string
}

const useStyles = makeStyles((theme: Theme) => ({
  mobileHeaderContainer: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    height: 155,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIcon: {
    width: 24,
    height: 19,
    display: "flex",
    background: "transparent",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "none !important",
    outline: "none !important",
    boxShadow: "none !important",
    cursor: "pointer",
    padding: 0,
    margin: 0,
    zIndex: 3,
  },
  divIconCommon: {
    background: theme.palette.secondary.main,
    width: 24,
    height: 3,
    transition: "transform 500ms",
  },
  divIconOpen: {
    background: theme.palette.secondary.main,
    width: 24,
    height: 3,
    "&:first-child": {
      transform: "translateY(6px) rotate(45deg)",
    },
    "&:nth-child(2)": {
      opacity: 0,
    },
    "&:nth-child(3)": {
      transform: "translateY(-6px) rotate(-45deg)",
    },
  },
  mobileMenuCommon: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    background: theme.palette.secondary.main,
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    paddingTop: 155,
    transition: "transform 500ms",
    transform: "translateX(100%)",
  },
  mobileMenuOpen: {
    transform: "translateX(0)",
  },
}))

const LayoutHeaderMobile = ({
  label,
  page,
  lightMode,
  uri,
  toggleLightMode,
}: Props): React.ReactElement => {
  const classes = useStyles()
  const [nav, showNav] = useState(false)
  function handleClick() {
    showNav(!nav)
    navigate(page)
  }
  const {
    mobileMenuCommon,
    mobileMenuOpen,
    divIconCommon,
    divIconOpen,
  } = useStyles()
  const className = cs({
    [mobileMenuCommon]: true,
    [mobileMenuOpen]: nav,
  })
  const divIcon = cs({
    [divIconCommon]: true,
    [divIconOpen]: nav,
  })
  return (
    <Fragment>
      <Hidden mdUp>
        <Container className={classes.mobileHeaderContainer}>
          <Container style={{ padding: 0, zIndex: 3 }}>
            <Link style={{ boxShadow: "none" }} to="/">
              <img
                src={
                  nav === true
                    ? lightMode === "light"
                      ? logo
                      : logoblack
                    : lightMode === "light"
                    ? logoblack
                    : logo
                }
                alt="logo-black"
                style={{ margin: 16, height: 100 }}
              />
            </Link>
          </Container>
          <button className={classes.menuIcon} onClick={() => showNav(!nav)}>
            <div className={divIcon}></div>
            <div className={divIcon}></div>
            <div className={divIcon}></div>
          </button>
          <Container className={className}>
            <ul>
              <li onClick={() => handleClick()}>{label}</li>
            </ul>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <ThemeSwitch
                lightMode={lightMode}
                toggleLightMode={toggleLightMode}
              />
            </Box>
          </Container>
        </Container>
      </Hidden>
    </Fragment>
  )
}

export default LayoutHeaderMobile
