import styled, { DefaultTheme } from "styled-components"
import { IFonts } from '../theme'
import React from "react"

interface IIcon {
    size: string,
    icon: React.ReactNode
}

interface SIcon {
    size: string,
}

const SIcon = styled.i<SIcon>`
    svg {
        font-size: ${({ size, theme }) => size ?? theme.font[16] };
    }
`

export const Icon = ({ icon, size }: IIcon) => {
    return (
        <SIcon size={size}>
            {icon}
        </SIcon>
    )
}

