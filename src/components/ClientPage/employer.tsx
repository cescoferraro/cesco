import { Typography } from "@material-ui/core"
import React, { useState } from "react"

interface Props {
  backgroundImage: string
  title: string
  job: string
}

export const EmployeeComponent = ({
  backgroundImage,
  job,
  title,
}: Props): React.ReactElement => {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      style={{
        display: "flex",
        // "-webkit-filter": hover ? `grayscale(0%)` : `grayscale(100%)`,
        filter: hover ? `grayscale(0%)` : `grayscale(100%)`,
        alignItems: "flex-end",
        backgroundImage: `url(${require("../../../content/" +
          backgroundImage)})`,
      }}
    >
      {hover && (
        <div
          style={{
            width: "100%",
            backgroundColor: hover ? "yellow" : "transparent",
            padding: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              zIndex: 3,
              filter: "unset",
              backgroundColor: hover ? "yellow" : "transparent",
            }}
          >
            <Typography style={{ color: "black", textAlign: "center" }}>
              {title}
            </Typography>
            <Typography style={{ color: "black", textAlign: "center" }}>
              {job}
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}
