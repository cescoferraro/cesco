import * as React from "react"

export default {
  title: "Receipt Component",
}

export const receiptComponent = ({ label }) => <button>{label}</button>

receiptComponent.controls = {
  label: {
    type: "text",
    value: "Cesco",
  },
}
