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
              date(formatString: "MMMM DD YYYY")
              title
              description
              image
              categorie
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
              date(formatString: "MMMM DD YYYY")
              description
            }
          }
        }
      }
    }
  `

// function extracted(key, posts, createPage, blogPost) {
//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node
//     createPage({
//       path: `${key}${post.node.fields.slug}`,
//       component: blogPost,
//       context: {
//         slug: post.node.fields.slug,
//         previous,
//         next,
//       },
//     })
//   })
// }

function createNewsPages(result, createPage) {
  const newsTemplate = path.resolve(`./src/templates/news-post.tsx`)
  const key = "news"
  const news = result.data.news.edges
  news.forEach((post, index) => {
    const previous = index === news.length - 1 ? null : news[index + 1].node
    const next = index === 0 ? null : news[index - 1].node
    createPage({
      path: `${key}${post.node.fields.slug}`,
      component: newsTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}
function createPortifolio(result, createPage) {
  const newsTemplate = path.resolve(`./src/templates/portifolio-post.tsx`)
  const key = "portifolio"
  const projects = result.data.portifolio.edges
  projects.forEach((post, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node
    let categorie = post.node.frontmatter.categorie
    console.log(post, categorie)
    createPage({
      path: `${key}${post.node.fields.slug}`,
      component: newsTemplate,
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
  return graphql(s).then((result) => {
    if (result.errors) {
      throw result.errors
    }
    createPortifolio(result, createPage)
    createNewsPages(result, createPage)
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
