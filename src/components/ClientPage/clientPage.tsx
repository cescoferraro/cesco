import { useI18next } from "gatsby-plugin-react-i18next"
import React from "react"
import { GlobalPageTitle } from "../GlobalPageTitle/globalTitle"
import { ClientGrid } from "./grid"

export const ClientPage = ({
  clients,
}: {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  clients: any[]
}): React.ReactElement => {
  const { t } = useI18next()
  return (
    <React.Fragment>
      <GlobalPageTitle label={t("client")} />
      <ClientGrid clients={clients} />
    </React.Fragment>
  )
}
