import { Box, Button, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DraftsIcon from "@material-ui/icons/Drafts"
import { graphql, navigate } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props: any) => {
  const siteTitle = "Agencia Global"
  const clients = props.data.clients.edges
  const news = props.data.news.edges
  const projects = props.data.projects.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Box style={{ marginTop: 24 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              News
            </Typography>
            <List>
              {news.map((d, i: number) => (
                <ListItem key={i}>
                  <ListItemText>
                    {`#${i.toString()} ${d.node.frontmatter.title} ${
                      d.node.frontmatter.description
                    }`}
                  </ListItemText>
                  <Button
                    variant={"contained"}
                    onClick={() => {
                      navigate("/news" + d.node.fields.slug)
                    }}
                  >
                    Go
                  </Button>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => navigate("/news")}
              size="small"
              color="primary"
            >
              Listar
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box style={{ marginTop: 24 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Projetos
            </Typography>
            <List>
              {projects.map((d, i: number) => (
                <ListItem key={i}>
                  <ListItemText>
                    {`#${i.toString()} ${d.node.frontmatter.title} ${
                      d.node.frontmatter.description
                    }`}
                  </ListItemText>
                  <Button
                    variant={"contained"}
                    onClick={() => {
                      navigate("/portifolio" + d.node.fields.slug)
                    }}
                  >
                    Go
                  </Button>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => navigate("/portifolio")}
              size="small"
              color="primary"
            >
              Listar
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box style={{ marginTop: 24 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Clientes
            </Typography>
            <List>
              {clients.map((d, i: number) => (
                <ListItem key={i}>
                  <ListItemText>
                    {`#${i.toString()} ${d.node.frontmatter.name} ${
                      d.node.frontmatter.description
                    }`}
                  </ListItemText>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
      <Box style={{ marginTop: 24 }}>
        <Card>
          <CardActions>
            <Button
              onClick={() => navigate("/about")}
              size="small"
              color="primary"
            >
              Saiba + Sobre a Global
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              size="small"
              color="primary"
            >
              Contato
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    clients: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/client/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/portifolio/" } }
    ) {
      edges {
        node {
          fileAbsolutePath
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
    news: allMdx(filter: { fileAbsolutePath: { regex: "/content/news/" } }) {
      edges {
        node {
          fileAbsolutePath
          excerpt
          fields {
            slug
          }
          frontmatter {
            name
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
