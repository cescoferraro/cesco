import React from "react"
import { I18nextProvider, withTranslation } from "react-i18next"
import i18next from "./config"

export const withTrans = (
  component: React.ReactComponentElement<void>,
): ((props) => React.ReactElement) => {
  const Component: React.ReactElement = withTranslation()(component)
  return function hello(props): React.ReactElement {
    return (
      <I18nextProvider i18n={i18next}>
        <Component {...props} language={i18next.language} />
      </I18nextProvider>
    )
  }
}
