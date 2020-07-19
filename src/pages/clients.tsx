import React from "react"
import SEO from "../components/seo"
import { BlogQueryQuery } from "../global"

const Clients = (props: { data?: BlogQueryQuery } & any) => {
  return (
    <React.Fragment>
      <SEO title="All posts" />
      <div style={{ margin: "20px 0 40px" }}>
        <h2>clientes aqui</h2>
      </div>
    </React.Fragment>
  )
}

export default Clients
