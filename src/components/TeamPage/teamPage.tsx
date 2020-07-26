import { useI18next } from "gatsby-plugin-react-i18next"
import * as React from "react"
import { GlobalPageTitle } from "../GlobalPageTitle/globalTitle"
import { GridEmployees } from "./grid"
import "./team.css"
import { Employes } from "./types"

interface Props {
  employees: Employes
}

export const TeamPage = ({ employees }: Props): React.ReactElement => {
  const { t } = useI18next()
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("team")} />
      <GridEmployees employees={employees} />
    </React.Fragment>
  )
}
