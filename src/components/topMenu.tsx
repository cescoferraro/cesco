import React, { Fragment } from "react"
import { Container, Hidden } from "@material-ui/core"
import { navigate, Link } from "gatsby"
import { TabComponent } from "./drawerItem"

const styles = {
  regular: {
    lineHeight: "1em",
    fontSize: 13,
    padding: "6px 10px",
    border: "1px solid transparent",
  },
}

const TopMenu = ({ uri }: { uri: string }) => {
  return (
    <Fragment>
      <Hidden smDown>
        <Container
          style={{
            display: "flex",
            maxWidth: "1280px",
            alignItems: "flex-end",
            padding: "0px 120px",
            height: 155,
          }}
        >
          <Container style={{ alignContent: "flex-start" }}>
            <Link style={{ boxShadow: "none" }} to="/">
              <img
                src="https://user-images.githubusercontent.com/36003926/87722225-1a5ff080-c78e-11ea-8a61-001dafc83634.png"
                alt="logo-black"
                style={{ margin: 16 }}
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
              <TabComponent page={"/clients"} uri={uri} label={"CLIENTES"} />
              <TabComponent page={"/contact"} uri={uri} label={"CONTACT"} />
            </ul>
          </Container>
        </Container>
      </Hidden>
    </Fragment>
  )
}

export default TopMenu
