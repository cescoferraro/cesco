import { Drawer, Hidden } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { Fragment } from "react"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      background: theme.palette.primary.main,
      width: 120,
      border: "none",
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: 110,
    },
  }),
)

const LeftDrawer = ({ open }: { open: boolean }): React.ReactElement => {
  const classes = useStyles()

  return (
    open && (
      <Fragment>
        <Hidden smDown>
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div>??</div>
          </Drawer>
        </Hidden>
      </Fragment>
    )
  )
}
export default LeftDrawer
