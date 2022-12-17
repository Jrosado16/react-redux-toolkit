import { SET_FAVORITE, SET_POKEMONS } from "../actions/types";

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
}

const initState:TypeState = {
  pokemons: [],
}

export const pokemonsReducers = (state = initState, action:any) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }; 
    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemontIndex = newPokemonsList.findIndex((pokemon:any) => pokemon.id === action.payload.pokemonId);
      if (currentPokemontIndex < 0) {
        return state;
      }
      newPokemonsList[currentPokemontIndex].favorite = !newPokemonsList[currentPokemontIndex]?.favorite;
      return { ...state, pokemons: newPokemonsList };
    default:
      return state;
  };
};