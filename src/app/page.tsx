"use client"

import React from 'react'

import * as Page from './Components/Pages/Home'

export default function Home() {
  return (
    <Page.SContainer>
      <h1>Boa noite</h1>
      <Page.SLastedActionsContainer>
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
      </Page.SLastedActionsContainer>
    </Page.SContainer>
  )
}
