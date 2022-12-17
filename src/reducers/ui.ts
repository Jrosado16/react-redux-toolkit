import { SET_LOADING } from "../actions/types";


export type TypeState = {
  loading : boolean
}

const initState:TypeState = {
  loading: false,
}

export const uiReducers = (state = initState, action:any) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  };
};