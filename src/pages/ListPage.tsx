import { useHistory } from 'react-router-dom'
import { Character, CharacterGender, CharacterStatus } from '../api/types'
import { CharacterCard } from '../components/CharacterCard'

export const ListPage = () => {
  const history = useHistory()

  const handleCharacterClick = (id: number) => {
    history.push(`/detail/${id}`)
  }

  const mock: Character = {
    id: 2,
    name: 'Morty Smith',
    status: CharacterStatus.ALIVE,
    species: 'Human',
    type: '',
    gender: CharacterGender.MALE,
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  }

  return <CharacterCard character={mock} onClick={handleCharacterClick} />
}
