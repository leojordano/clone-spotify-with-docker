import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'

interface ISkeleton {
    isShowing?: boolean
    children?: React.ReactNode
}

const SSkeleton = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 8px;
    opacity: 1;
    animation: skeleton-loading 1.5s linear infinite alternate;
    transition: all .5s;
    z-index: 10;
    
    @keyframes skeleton-loading {
        0% {
            background-color: ${({theme})=> theme.lightBlack}80;
        }
        100% {
            background-color: ${({theme})=> theme.lightGray};
        }
    }

    &.remove {
        opacity: 0;
    }
`

const Skeleton = ({ children, isShowing = false }: ISkeleton) => {
    const [ show, setShow ] = useState<"loading"  | "stoping"  | "stoped"  | "clear">("loading");

    useEffect(() => {
        console.log(isShowing)
        if(!isShowing) {
            setShow("stoping")

            setTimeout(() => {
                setShow("stoped")
            }, 500);

            setTimeout(() => {
                setShow("clear")
            }, 1000);
        }
    }, [isShowing])

    return (
        <SSkeleton className={show !== "loading" ? "remove" : ""} />
    )
}

export { Skeleton }