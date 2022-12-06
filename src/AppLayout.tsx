import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import { Header } from './components/Header'
import { useTheme } from './hooks/useTheme'

type Props = {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Box sx={{ p: 2 }}>{children}</Box>
    </ThemeProvider>
  )
}
