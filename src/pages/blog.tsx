import * as React from "react"
import {graphql, Link, navigate} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {rhythm} from "../utils/typography"
import Button from "../components/button"

const Blog = (props) => {
    const {data} = props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
        <Layout location={props.location} title={siteTitle}>
            <SEO title="All posts"/>
            <Bio/>
            <div style={{margin: "20px 0 40px"}}>
                {posts.map(({node}) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <div key={node.fields.slug}>
                            <a
                                style={{
                                    marginBottom: rhythm(1 / 4),
                                }}

                                onClick={()=>{
                                    navigate("/blog"+node.fields.slug)
                                }}
                            >
                                    {title}
                            </a>
                            <small>{node.frontmatter.date}</small>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </div>
                    )
                })}
            </div>
            <Link to="/">
                <Button marginTop="85px">Go Home</Button>
            </Link>
        </Layout>
    )
};

export default Blog

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
