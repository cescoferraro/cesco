import Typography from "@material-ui/core/Typography"
import * as React from "react"

export const title = "Change requires crEativity"
const subtitle =
  "somos uma Agência criativa para marcas em constante transformação."
export const HomeTitleComponent = (): React.ReactElement => (
  <React.Fragment>
    <Typography>{title}</Typography>
    <Typography>{subtitle}</Typography>
  </React.Fragment>
)
