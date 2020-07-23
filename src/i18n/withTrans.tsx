import React, { ReactElement } from "react"
import { I18nextProvider, withTranslation } from "react-i18next"
import i18next from "./config"

export const withTrans = (
  component: ReactElement,
): ((props) => React.ReactElement) => {
  const Component: React.ReactElement = withTranslation()(component)
  const reactElement = (props): React.ReactElement => (
    <I18nextProvider i18n={i18next}>
      <Component {...props} language={i18next.language} />
    </I18nextProvider>
  )
  return reactElement
}
