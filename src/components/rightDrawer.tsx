import { Container, Drawer, Hidden } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import React, { Fragment } from "react"
import { TabComponent } from "./drawerItem"

const useStyles = makeStyles(() =>
  createStyles({
    drawerPaper: {
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 110,
    },
    container: {
      display: "flex",
      alignItems: "center",
      transform: "rotate(-90deg)",
    },
    list: {
      color: "#AAA",
      listStyle: "none",
      display: "flex",
      justifyContent: "space-evenly",
      margin: 16,
    },
  }),
)

const RightDrawer = ({ uri, open }: { uri: string; open: boolean }) => {
  const classes = useStyles()
  const drawerClasses = { paper: classes.drawerPaper }
  return (
    open && (
      <Fragment>
        <Hidden smDown>
          <Drawer variant="permanent" anchor="right" classes={drawerClasses}>
            <Container className={classes.container}>
              <ul className={classes.list}>
                <TabComponent page={"/"} uri={uri} label={"WORKS"} />
                <TabComponent page={"/about"} uri={uri} label={"ABOUT"} />
                <TabComponent page={"/news"} uri={uri} label={"NEWS"} />
                <TabComponent page={"/clients"} uri={uri} label={"CLIENTES"} />
                <TabComponent page={"/contact"} uri={uri} label={"CONTACT"} />
              </ul>
            </Container>
          </Drawer>
        </Hidden>
      </Fragment>
    )
  )
}

export default RightDrawer
