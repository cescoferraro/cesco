import React, { Fragment } from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { Hidden, Drawer, Container } from "@material-ui/core"
import { navigate } from "gatsby"

const styles = {
  li: {
    lineHeight: "1em",
    fontSize: 13,
    padding: "6px 10px",
    border: "1px solid transparent",
  },
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 110,
    },
  }),
)

export default function RightDrawer() {
  const classes = useStyles()
  function hoverOnItem(e) {
    e.target.style.color = "#000"
  }
  function hoverOffItem(e) {
    e.target.style.color = "#AAA"
  }
  function hoverOnContact(e) {
    e.target.style.color = "#000"
    e.target.style.border = "2px solid #FFCC00"
    e.target.style.padding = "5px 9px"
  }
  function hoverOffContact(e) {
    e.target.style.color = "#AAA"
    e.target.style.border = "1px solid #FFCC00"
    e.target.style.padding = "6px 10px"
  }

  return (
    <Fragment>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          anchor="right"
          classes={{ paper: classes.drawerPaper }}
        >
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              transform: "rotate(-90deg)",
            }}
          >
            <ul
              style={{
                color: "#AAA",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-evenly",
                margin: 16,
              }}
            >
              <li
                onMouseOver={hoverOnItem}
                onMouseOut={hoverOffItem}
                onClick={() => navigate("/")}
                style={styles.li}
              >
                WORKS
              </li>
              <li
                onMouseOver={hoverOnItem}
                onMouseOut={hoverOffItem}
                onClick={() => navigate("/about")}
                style={styles.li}
              >
                SOBRE
              </li>
              <li
                onMouseOver={hoverOnItem}
                onMouseOut={hoverOffItem}
                onClick={() => navigate("/news")}
                style={styles.li}
              >
                NEWS
              </li>
              <li
                onMouseOver={hoverOnItem}
                onMouseOut={hoverOffItem}
                onClick={() => navigate("/clients")}
                style={styles.li}
              >
                CLIENTES
              </li>
              <li
                onMouseOver={hoverOnContact}
                onMouseOut={hoverOffContact}
                onClick={() => navigate("/contact")}
                style={{
                  padding: "6px 10px",
                  border: "1px solid #FFCC00",
                  fontSize: 13,
                  lineHeight: "1em",
                }}
              >
                CONTATO
              </li>
            </ul>
          </Container>
        </Drawer>
      </Hidden>
    </Fragment>
  )
}
