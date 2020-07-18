import { Link } from "gatsby"
import * as React from "react"

import Button from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlogQueryQuery } from "../global"

const About = (props: { data?: BlogQueryQuery } & any) => {
  return (
    <Layout location={props.location} title={"Agencia Global"}>
      <SEO title="All posts" />
      <div style={{ margin: "20px 0 40px" }}>
        <h2>we are hell a coll!</h2>
      </div>
      <Link to="/">
        <Button marginTop="85px">Go Home</Button>
      </Link>
    </Layout>
  )
}

export default About