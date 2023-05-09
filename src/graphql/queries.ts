import { gql } from '@apollo/client'
import { getRandomNumbers } from '../utils/helpers'
import { CHARACTERS_TOTAL, NUMBER_OF_CHARACTERS } from '../constants/app'

const randomNumbersArray = getRandomNumbers(
  NUMBER_OF_CHARACTERS,
  CHARACTERS_TOTAL
)

export const GET_CHARACTERS = gql`
  query {
    charactersByIds(ids:${JSON.stringify(randomNumbersArray)}) {
      id
      name
      image
      species
    }
  }
`
