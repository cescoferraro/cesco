import React, { Fragment } from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import { Hidden, Drawer } from "@material-ui/core"

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

export default function LeftDrawer() {
  const classes = useStyles()

  return (
    <Fragment>
      <Hidden smDown>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
          <div>??</div>
        </Drawer>
      </Hidden>
    </Fragment>
  )
}
