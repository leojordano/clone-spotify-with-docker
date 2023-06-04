"use client"

import { Inter } from 'next/font/google'
import GlobalStyle from '../globalStyles'
import styled from 'styled-components'

import { AppProviders } from "./Components/Global/AppProviders"
import { Sidebar, Header } from './Components/Global'

const inter = Inter({ subsets: ['latin'] })

type IRootLayout = {
  children: React.ReactNode
}

const SMainContainer = styled.body`
  padding: 12px;
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      <AppProviders>
        <GlobalStyle />
        <SMainContainer className={inter.className}>
          <Sidebar />
          <div className="page">
            <Header />
            {children}
          </div>
        </SMainContainer>
      </AppProviders>
    </html>
  )
}
