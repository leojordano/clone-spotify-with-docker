"use client"

import React from 'react'

import { Flex } from '../@styles'
import * as Page from './Components/Pages/Home'

export default function Home() {
  return (
    <Page.SContainer>
      <h1>Boa noite</h1>
      <Page.SLastedActionsContainer>
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
        <Page.LastedAction Image="http://placekitten.com/80/80" Name="Teste" />
      </Page.SLastedActionsContainer>

      <Flex justifyContent='space-between' alignItems='center'>
        <h1>Made For Jordanoo</h1>
        <span>Show All</span>
      </Flex>
      <Page.SPlaylistsContainer>
        <Page.Playlist Name='Teste' Description='Descrição' Image='http://placekitten.com/150/150'/>
        <Page.Playlist Name='Teste' Description='Descrição' Image='http://placekitten.com/150/150'/>
        <Page.Playlist Name='Teste' Description='Descrição' Image='http://placekitten.com/150/150'/>
        <Page.Playlist Name='Teste' Description='Descrição' Image='http://placekitten.com/150/150'/>
        <Page.Playlist Name='Teste' Description='Descrição' Image='http://placekitten.com/150/150'/>
      </Page.SPlaylistsContainer>
      
    </Page.SContainer>
  )
}
