import { createStyles, makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import React from "react"
import * as cs from "classnames"

const itemStyles = makeStyles(() =>
  createStyles({
    common: {
      color: "#AAA",
      fontSize: 13,
      lineHeight: "1em",
      padding: "6px 10px",
      "&:hover": { color: "#000" },
    },
    selected: { border: "1px solid #FFCC00" },
    regular: { border: "1px solid transparent" },
  }),
)

export const TabComponent = ({ label, page, uri }: Props) => {
  const { common, regular, selected } = itemStyles()
  const here = uri === page
  const className = cs({ [common]: true, [regular]: !here, [selected]: here })
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
