import createContext from '../utils/create-context';

export interface CharacterI {
  id?: number;
  image?: string;
  key?: number;
  name?: string;
  species?: string;
}

export interface AppContext {
  characters: Array<CharacterI>;
  loading: boolean;
  setState?: React.Dispatch<React.SetStateAction<AppContext>>;
  setCharacters: (c: Array<CharacterI>) => void;
  setLoading: (l: boolean) => void;
}

export const [useAppContext, AppContextProvider] = createContext<AppContext>();
