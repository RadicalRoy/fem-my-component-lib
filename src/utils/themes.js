import {teal, neutral, gray, yellow, red, green} from "./colors";
import {primaryFont} from "./typography";


export const defaultTheme = {
    primaryColor: teal[300],
    primaryColorHover: teal[200],
    primaryColorActive: teal[100],
    textColorOnPrimary: neutral[100],
    textColor: neutral[600],
    textColorInverted: neutral[100],
    disabled: gray[400],
    textOndisabled: gray[400],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }

}

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: teal[300],
    textColor: teal[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: teal[100],
    textOnFormElementBackground: neutral[100],
    status: {
      warningColor: yellow[100],
      warningColorHover: yellow[200],
      warningColorActive: yellow[300],
      errorColor: red[100],
      errorColorHover: red[200],
      errorColorActive: red[300],
      successColor: green[100],
      successColorHover: green[200],
      successColorActive: green[300]
    }
  };