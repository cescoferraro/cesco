import * as React from "react"
import {navigate} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component<any,any> {
    render() {
        const siteTitle = "Gatsby Starter Personal Website"

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Home"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <button
                    onClick={() => {
                        console.log(33)
                        navigate("/client")
                    }}
                >
                    Go to Blog
                </button>
            </Layout>
        )
    }
}

export default IndexPage
