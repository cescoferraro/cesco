import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Clients = (props: { data?: BlogQueryQuery } & any) => {
    return (
      <Layout location={props.location} title={"Agencia Global"}>
        <SEO title="All posts" />
        <div style={{ margin: "20px 0 40px" }}>
          <h2>clientes aqui</h2>
        </div>
      </Layout>
    )
  }
  
  export default Clients