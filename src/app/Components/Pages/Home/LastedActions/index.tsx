import React, { useRef } from "react";
import styled from "styled-components";
import { FaPlay } from 'react-icons/fa'
import { Skeleton } from "../../../Global";

interface ILastedAction {
    Image: string
    Name: string
    isLoading: boolean
}

const SLastedAction = styled.div`
    height: 80px;
    border-radius: 8px;
    background-color: ${({theme})=> theme.lightGray};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: calc(95% / 3);
    position: relative;
    cursor: pointer;

    img {
        border-radius: 8px 0px 0px 8px;
    }

    .play-icon {
        position: absolute;
        right: 10px;
        background-color: ${({theme}) => theme.green};
        padding: 18px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.black};
        opacity: 0;
        transition: all .5s;
    }

    &:hover {
        .play-icon {
            opacity: 1;
        }
    }
`

const LastedAction = ({Image, Name, isLoading}: ILastedAction) => {
    const ref = useRef<HTMLDivElement>(null)
    
    return (
        <SLastedAction ref={ref}>
            <Skeleton isShowing={isLoading} />
            <img src={Image} alt={Name} />
            <span>{Name}</span>
            <span className="play-icon"><FaPlay /></span>
        </SLastedAction>
    )
}

export { LastedAction }

