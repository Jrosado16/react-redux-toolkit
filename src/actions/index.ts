import { Dispatch } from "react";
import { getPokemonDetailed } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload:any) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload:any) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload:any) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails = (pokemon = []) => async (dispatch:Dispatch<any>) => {
  const pokemonsDetailed = await Promise.all(pokemon.map((pokemon:any) => getPokemonDetailed(pokemon)));
  dispatch(setPokemons(pokemonsDetailed));
}