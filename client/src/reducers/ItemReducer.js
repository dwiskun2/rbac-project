
import { GET_ARTIKELS, ADD_ARTIKEL, DELETE_ARTIKEL, PUT_ARTIKEL, ARTIKELS_LOADING } from '../actions/types';

const initialState = {
  artikels: [],
  loading: false 
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ARTIKELS:
      return {
        ...state,
        artikels: action.payload,
        loading: false
      };
    case DELETE_ARTIKEL:
      return {
        ...state,
        artikels: state.artikels.filter(artikel => artikel._id !== action.payload)
      };
    case ADD_ARTIKEL:
      return {
        ...state,
        artikels: [action.payload, ...state.artikels]
      };
    case ARTIKELS_LOADING:
      return {
        ...state, 
        loading: true
      };
    default:
      return state;
  }
}

// [
// { id: uuid(), name: "Artikel 1" },
// { id: uuid(), name: "Artikel 2" },
// { id: uuid(), name: "Artikel 3" },
// { id: uuid(), name: "Artikel 4" }
// ]
// pake ini untuk static state