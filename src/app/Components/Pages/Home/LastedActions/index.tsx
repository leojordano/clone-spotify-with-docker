import React from "react";
import styled from "styled-components";

interface ILastedAction {
    Image: string
    Name: string
}

const SLastedAction = styled.div`
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

