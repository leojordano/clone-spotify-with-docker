"use client"

import { useState, Suspense } from 'react'
import type { AppProps } from 'next/app';

import { ErrorBoundary } from "react-error-boundary";
import { Hydrate, QueryClientProvider, QueryClient } from 'react-query'
import { useServerInsertedHTML } from 'next/navigation';
import { theme } from "../../../theme"
import { ThemeProvider, ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface IAppProviders{
    children: React.ReactNode
}

const AppProviders = ({children}: IAppProviders) => {
    const [ styledComponentsStyleSheet ] = useState(() => new ServerStyleSheet());
    const [ queryClient ] = useState(() => new QueryClient());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    return (
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
                <ThemeProvider theme={theme}>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </ThemeProvider>
            </StyleSheetManager>
        </ErrorBoundary>
    )
}

export { AppProviders }