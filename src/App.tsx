import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { AppContext, AppContextProvider, CharacterI } from './context/app'
import Home from './pages/Home'
import Board from './pages/Game'
import Layout from './components/layout'
import './style.scss'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
})

const initialState: AppContext = {
  characters: [],
  loading: true,
  setCharacters: () => 0,
  setLoading: () => 0,
}

const App = () => {
  const [state, setState] = useState<AppContext>(initialState)

  const setCharacters = (characters: Array<CharacterI>) => {
    setState(prevState => ({ ...prevState, characters }))
  }

  const setLoading = (loading: boolean) => {
    setState(prevState => ({ ...prevState, loading }))
  }

  return (
    <ApolloProvider client={client}>
      <AppContextProvider value={{ ...state, setCharacters, setLoading }}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/board" Component={Board} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </AppContextProvider>
    </ApolloProvider>
  )
}

export default App
