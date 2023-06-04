import React from "react";
import styled from "styled-components";
import { FaPlay } from 'react-icons/fa'

interface ILastedAction {
    Image: string
    Name: string
}

const SLastedAction = styled.div`
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

const LastedAction = ({Image, Name}: ILastedAction) => {
    return (
        <SLastedAction>
            <img src={Image} alt={Name} />
            <span>{Name}</span>
            <span className="play-icon"><FaPlay /></span>
        </SLastedAction>
    )
}

export { LastedAction }

