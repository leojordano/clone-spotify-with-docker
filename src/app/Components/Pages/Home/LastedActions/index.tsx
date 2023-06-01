import React from "react";
import styled from "styled-components";

interface ILastedAction {
    Image: string
    Name: string
}

const SLastedAction = styled.div`
    border-radius: 8px;
    background-color: ${({theme})=> theme.colors.lightGray};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: calc(95% / 3);

    img {
        border-radius: 8px 0px 0px 8px;
    }
`

const LastedAction = ({Image, Name}: ILastedAction) => {
    return (
        <SLastedAction>
            <img src={Image} alt={Name} />
            <span>{Name}</span>
        </SLastedAction>
    )
}

export { LastedAction }

