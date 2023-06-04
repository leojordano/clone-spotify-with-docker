import styled from 'styled-components'

const SContainer = styled.div`
  height: 100vh;
  border-radius: ${({theme}) => theme.radius};
  padding: 80px 24px 24px;
  background-color: ${({theme}) => theme.lightGray};
  background: linear-gradient(180deg, rgb(87, 7, 7) -20%, ${({theme}) => theme.lightBlack} 60%,${({theme}) => theme.lightBlack} 100%);
`

const SLastedActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0px;
`

const SPlaylistsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
` 

export {
    SContainer,
    SLastedActionsContainer,
    SPlaylistsContainer
}