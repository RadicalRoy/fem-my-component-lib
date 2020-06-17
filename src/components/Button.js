import styled from 'styled-components'
import {defaultTheme, typeScale} from "../utils"
import {applyStyleModifiers} from 'styled-components-modifiers'

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: (props) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: (props) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  error: (props) => `
    background: none;
    color: ${props.theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: (props) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: (props) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  success: (props) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: (props) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: (props) => `
    border: 2px solid ${props.theme.status.successColor};
  `
}


const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width:100px;
    cursor: pointer;
    font-family: "Lora";
    
`

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.primaryColor};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
    transition: background-color 0.2 linear;
    
    &:hover {
        background-color: ${props => props.primaryColorHover};
    }

    &:focus {
        background-color: ${props => props.primaryColorActive};
    }

    &:disabled {
        background-color: ${props => props.disabled};
        cursor: non-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
    
`

export const SecondaryButton = styled(Button)`
    background-color: none;
    border: solid 3px ${props => props.theme.primaryColor};
    color: ${props => props.theme.primaryColor};
    transition: color 0.2 linear, border-color: 0.2 linear;

    &:hover {
        border-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.primaryColorHover};
    }

    &:focus {
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.primaryColorActive};
    }

    &:disabled {
        border-color: ${props => props.theme.disabled};
        color: ${props => props.theme.disabled};
        cursor: non-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
    background-color: none;
    border: none;
    color: ${props => props.theme.primaryColor};
    transition: color 0.2 linear;

    &:hover {
        color: ${props => props.theme.primaryColorHover};
    }

    &:focus {
        color: ${props => props.theme.primaryColorActive};
    }

    &:disabled {
        color: ${props => props.theme.disabled};
        cursor: non-allowed;
    }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}
    
`

