export enum CharacterStatus {
  DEAD = 'dead',
  ALIVE = 'alive',
  UNKNOWN = 'unknown'
}

export enum CharacterGender {
  MALE = 'male',
  FAMALE = 'famale',
  UNKNOWN = 'unknown'
}

export type Location = {
  name: string
  url: string
}

export type Character = {
  id: number
  name: string
  status: CharacterStatus
  species: string
  type: string
  gender: CharacterGender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}
