import styled from 'styled-components'
import {defaultTheme, typeScale} from "../utils"


const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width:100px;
    cursor: pointer;
    font-family: "Lora";
    
`

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: ${defaultTheme.textColorOnPrimary};
    transition: background-color 0.2 linear;
    
    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
    }

    &:focus {
        background-color: ${defaultTheme.primaryColorActive};
    }

    &:disabled {
        background-color: ${defaultTheme.disabled};
        cursor: non-allowed;
    }
`

export const SecondaryButton = styled(Button)`
    background-color: none;
    border: solid 3px ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};
    transition: color 0.2 linear, border-color: 0.2 linear;

    &:hover {
        border-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.primaryColorHover};
    }

    &:focus {
        border-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.primaryColorActive};
    }

    &:disabled {
        border-color: ${defaultTheme.disabled};
        color: ${defaultTheme.disabled};
        cursor: non-allowed;
    }
    
`

export const TertiaryButton = styled(Button)`
    background-color: none;
    border: none;
    color: ${defaultTheme.primaryColor};
    transition: color 0.2 linear;

    &:hover {
        color: ${defaultTheme.primaryColorHover};
    }

    &:focus {
        color: ${defaultTheme.primaryColorActive};
    }

    &:disabled {
        color: ${defaultTheme.disabled};
        cursor: non-allowed;
    }
`

