import { useState, useEffect } from 'react'
import { CharacterI, useAppContext } from '../context/app'
import { delay, randomizeArrayItems } from '../utils/helpers'
import { DELAY_TIME, PREVIEW_TIME } from '../constants/app'

interface ClickMemoI {
  first?: { id?: number; pos?: number }
  second?: { id?: number; pos?: number }
}

const useGame = () => {
  const { characters, loading } = useAppContext()
  const [board, setBoard] = useState<Array<CharacterI>>([])
  const [clickMemo, setClickMemo] = useState<ClickMemoI>({})
  const [hits, setHits] = useState<number>(0)
  const [turns, setTurns] = useState<number>(0)
  const [preview, setPreview] = useState(true)

  const handleCardClick = async (id: number | undefined, pos: number) => {
    if (!clickMemo?.first?.id) setClickMemo({ first: { id, pos } })
    else setClickMemo({ ...clickMemo, second: { id, pos } })
  }

  const evalMatch = async () => {
    if (clickMemo?.first?.id && clickMemo?.second?.id) {
      if (clickMemo?.first.id === clickMemo?.second.id) {
        const newBoard = structuredClone(board)
        newBoard[clickMemo?.first?.pos as number] = {
          key: newBoard[clickMemo?.first?.pos as number].key,
        }
        newBoard[clickMemo?.second?.pos as number] = {
          key: newBoard[clickMemo?.second?.pos as number].key,
        }
        await delay(DELAY_TIME)
        setBoard(newBoard)
        setHits(hits + 1)
        setTurns(turns + 1)
        setClickMemo({})
      } else {
        await delay(DELAY_TIME)
        setTurns(turns + 1)
        setClickMemo({})
      }
    }
  }

  const hideCards = async () => {
    await delay(PREVIEW_TIME)
    setPreview(false)
  }

  const isActive = (character: CharacterI, pos: number): boolean => {
    return (
      clickMemo?.first?.pos === pos ||
      clickMemo?.second?.pos === pos ||
      !character?.id ||
      preview
    )
  }

  const isClickDisabled = (character: CharacterI): boolean => {
    return (
      !!(clickMemo?.first && clickMemo?.second) || !character?.id || preview
    )
  }

  useEffect(() => {
    setBoard(randomizeArrayItems(characters))
  }, [characters])

  useEffect(() => {
    if (clickMemo?.second?.id) evalMatch()
  }, [clickMemo])

  useEffect(() => {
    hideCards()
  }, [])

  return {
    board,
    clickMemo,
    hits,
    turns,
    preview,
    loading,
    handleCardClick,
    isActive,
    isClickDisabled,
  }
}

export default useGame
