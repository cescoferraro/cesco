import { makeStyles } from "@material-ui/core/styles"
import { rhythm } from "../utils/typography"

export const useStyles = makeStyles({
  root: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
  wrapper: {
    minHeight: "100vh",
  },
})
