import { createStyles, makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import React from "react"
import * as cs from "classnames"

const itemStyles = makeStyles(() =>
  createStyles({
    common: {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: 13,
      lineHeight: "1em",
      border: "2px solid transparent",
      margin: "0px 8px",
      padding: "4px 0px 3px",
      "&:hover": { color: "#000" },
    },
    selected: { borderBottom: "2px solid #FFCC00" },
    contactCommon: {
      color: "rgba(0, 0, 0, 0.6)",
      fontSize: 13,
      lineHeight: "1em",
      border: "1px solid #FFCC00",
      margin: "0px 2px",
      padding: "5px 7px 2px",
      "&:hover": { color: "#000" },
    },
    contactSelected: {
      border: "2px solid #FFCC00",
      padding: "4px 6px 3px",
    },
  }),
)

export const TabComponent = ({ label, page, uri }: Props) => {
  const { common, contactCommon, selected, contactSelected } = itemStyles()
  const contact = label === "CONTACT"
  const here = uri === page && !contact
  const onContact = uri === page && contact
  const className = cs({
    [common]: !contact,
    [contactCommon]: contact,
    [selected]: here,
    [contactSelected]: onContact,
  })
  return (
    <li onClick={() => navigate(page)} className={className}>
      {label}
    </li>
  )
}

interface Props {
  uri: string
  label: string
  page: string
}
