import { Avatar, Box, Card, Typography } from '@mui/material'
import { Character } from '../api/types'

type Props = {
  character: Character
  onClick: (id: number) => void
}

export const CharacterCard = ({ character, onClick }: Props) => (
  <Card
    sx={{ p: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}
    onClick={() => onClick(character.id)}
  >
    <Avatar src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography>{character.name}</Typography>
      <Typography variant="caption" color="text.secondary">
        {character.species} - {character.status}
      </Typography>
    </Box>
  </Card>
)
