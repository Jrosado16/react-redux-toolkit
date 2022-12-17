import { combineReducers } from "redux";
import { pokemonsReducers } from "./pokemons";
import { uiReducers } from "./ui";

export const rootReducer = combineReducers({
    data: pokemonsReducers,
    ui:  uiReducers,
});