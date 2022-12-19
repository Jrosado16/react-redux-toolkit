import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonDetailed, getPokemons } from '../api';
import { setLoading } from './uiSlice';

type PokemonDetailType = {
  id:number;
  name: string;
  image : string;
  types: any[];
  sprites: any;
  abilities: any;
  favorite: boolean
}

export type TypeState = {
  pokemons: PokemonDetailType[],
  pokemonsFiltered: PokemonDetailType[],
}

const initialState:TypeState = {
  pokemons: [],
  pokemonsFiltered: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonRes = await getPokemons();
    const pokemonsDetailed = await Promise.all(pokemonRes.map((pokemon:any) => getPokemonDetailed(pokemon)));
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.pokemonsFiltered = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemontIndex = state.pokemons.findIndex((pokemon:any) => pokemon.id === action.payload.pokemonId);
      if (currentPokemontIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemontIndex].favorite;
        state.pokemons[currentPokemontIndex].favorite = !isFavorite;
      }
    },
    setPokemonsFiltered: (state, action) => {
      state.pokemonsFiltered = state.pokemons;
      const pokemonsFiltered = state.pokemons.filter((pokemon:any) => pokemon.name.includes(action.payload))
      state.pokemonsFiltered = pokemonsFiltered;
    }
  }
});

export const { setFavorite, setPokemons, setPokemonsFiltered } = dataSlice.actions;

export default dataSlice.reducer;