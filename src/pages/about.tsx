import { Typography } from "@material-ui/core"
import { Link } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"

const About = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Typography>About</Typography>
      <Typography>Lots to talk about</Typography>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default About
