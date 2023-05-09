import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import { useAppContext } from '../context/app'
import { GET_CHARACTERS } from '../graphql/queries'
import { duplicateCharacters } from '../utils/helpers'

const useLayout = () => {
  const { loading, data } = useQuery(GET_CHARACTERS)
  const { setCharacters, setLoading } = useAppContext()

  useEffect(() => {
    setLoading(loading)
  }, [loading])

  useEffect(() => {
    if (data?.charactersByIds) {
      setCharacters(duplicateCharacters(data.charactersByIds))
    }
  }, [data])
}
export default useLayout
