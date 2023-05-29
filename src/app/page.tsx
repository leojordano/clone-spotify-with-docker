"use client"

import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  height: 100vh;
  border-radius: ${({theme}) => theme.radius};
  padding: 24px;
  background: rgb(87,7,7);
  background: linear-gradient(180deg, rgba(87,7,7,1) 0%, rgba(2,0,0,1) 47%, rgba(0,0,0,1) 100%);
`

export default function Home() {
  return (
    <SContainer>Page</SContainer>
  )
}
