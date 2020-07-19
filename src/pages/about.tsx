import { Link } from "gatsby"
import * as React from "react"

import Button from "../components/Button/button"
import SEO from "../components/Seo/seo"
import { BlogQueryQuery } from "../global"

const About = (props: { data?: BlogQueryQuery } & any) => {
  return (
    <React.Fragment>
      <SEO title="All posts" />
      <div style={{ margin: "20px 0 40px" }}>
        <h2>we are hell a coll!</h2>
      </div>
      <Link to="/">
        <Button marginTop="85px">Go Home</Button>
      </Link>
    </React.Fragment>
  )
}

export default About
