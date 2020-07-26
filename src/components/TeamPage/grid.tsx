import * as React from "react"
import { EmployeeComponent } from "./employer"
import { Employes } from "./types"

export const GridEmployees = ({
  employees,
}: {
  employees: Employes
}): React.ReactElement => {
  return (
    <div style={{ margin: "20px 0 40px" }}>
      <div className={"grid"}>
        {employees.map(({ node }, index: number) => {
          console.log(node)
          return (
            <EmployeeComponent
              backgroundImage={node.frontmatter.image}
              key={index}
              title={node.frontmatter.name}
              job={node.frontmatter.job}
            />
          )
        })}
      </div>
    </div>
  )
}
