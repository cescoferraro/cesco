import { Link } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"
import SEO from "../components/Seo/seo"

const About = (): React.ReactElement => {
  return (
    <React.Fragment>
      <SEO title="All posts" />
      <h2>Team</h2>

      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default About
