import { DefaultTheme } from 'styled-components'

export type ITheme = {
    background: string
    colors: {
        gray: string
        lightGray: string   
        black: string
        lightBlack: string
        green: string
        white: string
    }
}

export const theme: ITheme = {
    background: "#000000",
    colors: {
        gray: "#121212",
        lightGray: "#434148",
        black: "#181818",
        lightBlack: "#272727",
        green: "#1CC558",
        white: "$ffffff"
    }
};