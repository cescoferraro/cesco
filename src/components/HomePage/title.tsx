import Typography from "@material-ui/core/Typography"
import * as React from "react"

export const title = "Change requires crEativity"
const subtitle =
  "somos uma Agência criativa para marcas em constante transformação."
export const HomeTitleComponent = (): React.ReactElement => (
  <React.Fragment>
    <Typography
      style={{
        marginTop: 32,
        fontSize: "40px",
        lineHeight: "65px",
        textTransform: "capitalize",
      }}
      noWrap={true}
    >
      {title.toUpperCase()}
    </Typography>
    <Typography
      noWrap={true}
      style={{
        fontWeight: "500",
        fontSize: "27px",
        lineHeight: "65px",
        textTransform: "capitalize",
      }}
    >
      {subtitle.toUpperCase()}
    </Typography>
  </React.Fragment>
)
