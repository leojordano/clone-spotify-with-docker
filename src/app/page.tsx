"use client"

import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { CatApi } from "../Services/Api"

import { Flex } from '../@styles'
import * as Page from './Components/Pages/Home'

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: [],
    queryFn: CatApi.GetCats 
  });

  useEffect(() => {
    console.log(data)
  }, [])

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

      <Flex justify='space-between' align='center'>
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
