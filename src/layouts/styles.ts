import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.down("lg")]: {
      marginTop: `155px`,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: `0px`,
    },
  },
  wrapper: {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
  },
  mobileHeaderContainer: {
    backgroundColor: theme.palette.primary.main,
  },
}))
