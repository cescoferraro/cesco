import { Link } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"

const About = (): React.ReactElement => {
  return (
    <React.Fragment>
      <h2>Team</h2>

      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default About
