import { DefaultTheme } from 'styled-components'

export interface IFonts {
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '22': '22px'
} 
export interface ITheme {
    background: string
    colors: {
        gray: string
        lightGray: string   
        black: string
        lightBlack: string
        green: string
        white: string
    },
    radius: string,
    font: IFonts
}

export const theme: ITheme = {
    background: "#000000",
    colors: {
        gray: "#121212",
        lightGray: "#434148",
        black: "#181818",
        lightBlack: "#272727",
        green: "#1CC558",
        white: "#ffffff"
    },
    radius: '12px',
    font: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px'
    }
};