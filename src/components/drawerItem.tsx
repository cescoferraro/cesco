import { createStyles, makeStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import React from "react"
import * as classNames from "classnames"

const itemStyles = makeStyles(() =>
  createStyles({
    selectedStyle: {
      padding: "6px 10px",
      border: "1px solid #FFCC00",
      fontSize: 13,
      lineHeight: "1em",
      color: "#AAA",
      "&:hover": {
        color: "#000",
      },
    },
    li: {
      lineHeight: "1em",
      fontSize: 13,
      padding: "6px 10px",
      border: "1px solid transparent",
      color: "#AAA",
      "&:hover": {
        color: "#000",
      },
    },
  }),
)

interface Props {
  uri: string
  label: string
  page: string
}

export const TabComponent = ({ label, page, uri }: Props) => {
  const classes = itemStyles()
  const here = uri === page
  console.log(here)
  return (
    <li
      onClick={() => navigate(page)}
      className={classNames({
        [classes.li]: !here,
        [classes.selectedStyle]: here,
      })}
    >
      {label}
    </li>
  )
}
