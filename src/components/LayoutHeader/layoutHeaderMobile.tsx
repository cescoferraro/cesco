import React, { Fragment, useState } from "react"
import { Hidden, Container, Box } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Link, navigate } from "gatsby"
import { LightMode } from "src/shared/theme"
import logo from "../../../static/logo-white.png"
import logoblack from "../../../static/logo-black.png"
import { ThemeSwitch } from "../ThemeSwitch/switch"
import * as cs from "classnames"
import { ThemeSwitchMobile } from "../ThemeSwitch/switchMobile"

interface Props {
  lightMode: LightMode
  toggleLightMode: () => void
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
    background: theme.palette.primary.main,
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
    justifyContent: "space-between",
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
  menuItem: {
    listStyle: "none",
    textDecoration: "none",
    textAlign: "left",
    fontSize: 24,
    marginBottom: 6,
    color: theme.palette.primary.main,
  },
}))

const LayoutHeaderMobile = ({
  lightMode,
  toggleLightMode,
}: Props): React.ReactElement => {
  const classes = useStyles()
  const [nav, showNav] = useState(false)
  function handleClick(page: string) {
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
            <ul style={{ margin: 16 }}>
              <li className={classes.menuItem} onClick={() => handleClick("/")}>
                Trabalhos
              </li>
              <li
                className={classes.menuItem}
                onClick={() => handleClick("/about")}
              >
                Sobre
              </li>
              <li
                className={classes.menuItem}
                onClick={() => handleClick("/news")}
              >
                News
              </li>
              <li
                className={classes.menuItem}
                onClick={() => handleClick("/clients")}
              >
                Clientes
              </li>
              <li
                className={classes.menuItem}
                onClick={() => handleClick("/team")}
              >
                Equipe
              </li>
              <li
                className={classes.menuItem}
                onClick={() => handleClick("/contact")}
              >
                Contato
              </li>
            </ul>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "40px 16px",
              }}
            >
              <ThemeSwitch
                lightMode={lightMode}
                toggleLightMode={toggleLightMode}
              />
              <ThemeSwitchMobile />
            </Box>
          </Container>
        </Container>
      </Hidden>
    </Fragment>
  )
}

export default LayoutHeaderMobile
