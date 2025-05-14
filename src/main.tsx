import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@styles/fonts/fonts.css'
import { Global, ThemeProvider } from '@emotion/react'
import GlobalStyle from '@styles/global'
import { theme } from '@styles/theme'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
