"use client"
import React from "react"
import styled from "styled-components"

interface IFlex {
    children: React.ReactNode
    direction?: "col" | "row"
    justifyContent?: "start" | "end" | "center" | "space-between"
    'alignItems'?: "flex-start" | "flex-end" | "center" | "space-between"
    gap?: string
}

const SFlex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props['alignItems']};
    gap: ${props => props.gap ?? "0px"}
`

export const Flex = (props: IFlex) => {
    const { children, direction, alignItems, justifyContent, gap, ...rest } = props
    return (
        <SFlex 
            direction={direction}
            alignItems={alignItems}
            justifyContent={justifyContent}
            gap={gap}
        >
            {children}
        </SFlex>
    )
}