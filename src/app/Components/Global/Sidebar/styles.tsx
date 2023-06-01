import styled from 'styled-components'

const SContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const SGroupContainer = styled.div`
    border-radius: ${props => props.theme.radius};
    background-color: ${props => props.theme.colors.lightBlack};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 12px;
    padding: 12px 8px;
    min-width: fit-content;

    &:nth-child(1) {
        flex: auto;
    }

    &:nth-child(2) {
        flex: 100%;
        max-height: 100%;
        overflow-y: scroll;
        position: relative;

        &::-webkit-scrollbar {
            position: absolute;
            opacity: 0;
            width: 0px;
        }
    }
`

const SImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: ${({theme}) => theme.radius};
`

export {
    SContainer,
    SGroupContainer,
    SImage
}