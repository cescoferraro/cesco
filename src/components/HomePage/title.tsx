import Typography from "@material-ui/core/Typography"
import { useI18next } from "gatsby-plugin-react-i18next"
import * as React from "react"

export const HomeTitleComponent = (): React.ReactElement => {
  const { t } = useI18next()
  const home = t("home")
  return (
    <React.Fragment>
      <Typography
        style={{
          marginTop: 24,
          fontFamily: "GSThree",
          fontSize: "40px",
          lineHeight: "65px",
          textTransform: "capitalize",
        }}
        noWrap={true}
      >
        {home.title}
      </Typography>
      <Typography
        noWrap={true}
        style={{
          fontWeight: "500",
          fontSize: "27px",
          lineHeight: "30px",
          textTransform: "capitalize",
        }}
      >
        {home.subtitle}
      </Typography>
    </React.Fragment>
  )
}
