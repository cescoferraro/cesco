const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


let s = `
    {
      portifolio: allMdx(
        filter: {fileAbsolutePath: {regex: "/content/portifolio/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      news: allMdx(
        filter: {fileAbsolutePath: {regex: "/content/news/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `

function extracted(key,posts, createPage, blogPost) {
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: `${key}${post.node.fields.slug}`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/client-post.js`)
  return graphql(s).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.portifolio.edges
    extracted("portifolio", posts, createPage, blogPost)
    const news = result.data.news.edges
    extracted("news", news, createPage, blogPost)
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
