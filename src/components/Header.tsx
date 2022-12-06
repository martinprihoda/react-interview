import { AppBar, Link, Typography } from '@mui/material'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => (
  <AppBar
    position="static"
    sx={{ p: 2, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
  >
    <Link href="/" underline="none">
      <Typography variant="h5" sx={{ color: '#fff' }}>
        Ricky and Morty
      </Typography>
    </Link>
    <ThemeSwitcher />
  </AppBar>
)
