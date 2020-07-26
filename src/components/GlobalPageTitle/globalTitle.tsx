import { Typography } from "@material-ui/core"
import * as React from "react"

export const GlobalPageTitle = ({
  label,
}: {
  label: string
}): React.ReactElement => (
  <Typography
    style={{
      fontSize: 40,
      paddingTop: 26,
      paddingBottom: 26,
      fontFamily: "GSThree",
    }}
  >
    {label}
  </Typography>
)
