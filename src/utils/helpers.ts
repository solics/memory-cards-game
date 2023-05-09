import { CharacterI } from '../context/app'

export const delay = (time: number) => new Promise(res => setTimeout(res, time))

export const randomizeArrayItems = (arr: Array<any>) => {
  return [...arr].sort(function () {
    return Math.random() - 0.5
  })
}

export const duplicateCharacters = (arr: Array<CharacterI>) => {
  let newCharacters: Array<CharacterI> = []
  arr.forEach(item => {
    newCharacters = [
      ...newCharacters,
      { ...item, key: Number(item.id) + 1000 },
      { ...item, key: Number(item.id) - 1000 },
    ]
  })
  return newCharacters
}

export const getRandomNumbers = (
  length: number,
  top: number
): Array<number> => {
  interface randomNumbersI {
    [key: number]: boolean
  }

  const randomNumbers: randomNumbersI = {}

  while (Object.keys(randomNumbers).length < length) {
    const number = Math.random() * top
    if (!randomNumbers[number]) {
      randomNumbers[number] = true
    }
  }
  return Object.keys(randomNumbers).map(key => parseInt(key))
}
