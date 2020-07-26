import { Box, Typography } from "@material-ui/core"
import { navigate } from "gatsby"
import * as React from "react"
import Masonry from "react-masonry-css"
import { Portifolio } from "./types"

interface Props {
  projects: { "[key]": Portifolio[] }
  value: string
}

export const HomeGrid = ({ projects, value }: Props): React.ReactElement => {
  return (
    <Box style={{ width: "100%", paddingBottom: 300, paddingTop: 30 }}>
      {Object.keys(projects).map((key, index) => {
        const inner = projects[key]
        console.log("inner")
        console.log(inner)
        return (
          <Masonry
            key={index}
            breakpointCols={{ default: 3, 700: 1, 1300: 2 }}
            className="global-home-grid"
            columnClassName="global-home-grid-column"
          >
            {inner
              .filter((tile) => tile.categorie === value)
              .map((tile, idx) => {
                /* eslint-disable  @typescript-eslint/no-var-requires */
                const require1 = require("../../../content/" + tile.image)
                return (
                  <div
                    key={idx}
                    onClick={() => navigate("portifolio" + tile.slug)}
                    style={{ backgroundImage: `url(${require1})` }}
                  >
                    <Box style={{ padding: "15px" }}>
                      <Typography
                        style={{
                          fontSize: "20px",
                          fontFamily: "GSThree",
                        }}
                      >
                        {tile.title}
                      </Typography>
                      <Typography style={{}}>{tile.description}</Typography>
                    </Box>
                  </div>
                )
              })}
          </Masonry>
        )
      })}
    </Box>
  )
}
