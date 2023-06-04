"use client"
import React from "react"
import styled from "styled-components"

interface IFlex {
    children: React.ReactNode
    direction?: "col" | "row"
    justify?: "start" | "end" | "center" | "space-between"
    align?: "flex-start" | "flex-end" | "center" | "space-between"
    gap?: string
}

const SFlex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    gap: ${props => props.gap ?? "0px"}
`

export const Flex = (props: IFlex) => {
    const { 
        children, 
        direction = "row", 
        align = "center", 
        justify = "end", 
        gap, 
        ...rest 
    } = props
    return (
        <SFlex 
            direction={direction}
            align={align}
            justify={justify}
            gap={gap}
        >
            {children}
        </SFlex>
    )
}