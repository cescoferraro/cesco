import { Box, Button, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { graphql, navigate } from "gatsby"
import * as React from "react"
import SEO from "../components/Seo/seo"
import { withTrans } from "../i18n/withTrans"

const IndexPage = (props: any) => {
  console.log(props)
  const projects = props.data.projects.edges
  return (
    <React.Fragment>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Box style={{ marginTop: 24 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.t("projects")}
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
    </React.Fragment>
  )
}

export default withTrans(IndexPage)

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
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
  }
`
