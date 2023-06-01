"use client"

import { Inter } from 'next/font/google'
import GlobalStyle from '../globalStyles'
import { theme } from "../theme.ts"
import styled, { ThemeProvider } from 'styled-components'

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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SMainContainer className={inter.className}>
          <Sidebar />
          <div className="page">
            <Header />
            {children}
          </div>
        </SMainContainer>
      </ThemeProvider>
    </html>
  )
}
