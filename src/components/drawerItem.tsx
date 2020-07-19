import { createStyles, makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import React from "react"
import * as classNames from "classnames"

const itemStyles = makeStyles(() =>
  createStyles({
    common: { fontSize: 13, lineHeight: "1em", padding: "6px 10px" },
    selected: {
      border: "1px solid #FFCC00",
      color: "#AAA",
      "&:hover": { color: "#000" },
    },
    regular: {
      border: "1px solid transparent",
      color: "#AAA",
      "&:hover": { color: "#000" },
    },
  }),
)

interface Props {
  uri: string
  label: string
  page: string
}

export const TabComponent = ({ label, page, uri }: Props) => {
  const { common, regular, selected } = itemStyles()
  const here = uri === page
  const className = classNames({
    [common]: true,
    [regular]: !here,
    [selected]: here,
  })
  return (
    <li onClick={() => navigate(page)} className={className}>
      {label}
    </li>
  )
}
