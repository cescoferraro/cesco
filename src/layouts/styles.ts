import { makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginLeft: `24px`,
    marginRight: `25px`,
    width: "auto",
    [theme.breakpoints.down("lg")]: {
      marginTop: `155px`,
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: `48px`,
      marginRight: `48px`,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: `0px`,
      marginLeft: `120px`,
      marginRight: `120px`,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: `120px`,
      marginRight: `120px`,
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
