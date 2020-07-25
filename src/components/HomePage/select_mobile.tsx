import { Hidden } from "@material-ui/core"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import * as React from "react"

export const MobileSelect = ({
  categories,
  setValue,
  value,
}: {
  setValue: (n: number) => void
  value: number
  categories: string[]
}): React.ReactElement => (
  <Hidden smUp>
    <Select
      value={value}
      onChange={(er) => {
        setValue(Number(er.target.value))
      }}
    >
      {categories.map((d, index) => {
        return (
          <MenuItem key={index} value={index}>
            {d}
          </MenuItem>
        )
      })}
    </Select>
  </Hidden>
)
