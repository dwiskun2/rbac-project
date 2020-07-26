import axios from 'axios';
import { GET_ARTIKELS, ADD_ARTIKEL, DELETE_ARTIKEL, PUT_ARTIKEL, ARTIKELS_LOADING } from './types';

export const getArtikels = () => dispatch => {
  dispatch(setArtikelsLoading());
  axios.get('/api/artikels').then(res => 
    dispatch({
       type: GET_ARTIKELS,
       payload: res.data
    })
  );
};

export const addArtikel = artikel => dispatch => {
  axios.post('/api/artikels', artikel).then(res =>
    dispatch({
      type: ADD_ARTIKEL,
      payload: res.data
    })
    );
};



export const deleteArtikel = id => dispatch=> {
  axios.delete(`/api/artikels/${id}`).then(res =>
    dispatch({
      type: DELETE_ARTIKEL,
      payload: id
    })
  );
};

export const setArtikelsLoading = () => {
  return {
    type: ARTIKELS_LOADING
  }
}



// gunakan ini untuk bikin static state
// export const getArtikel = () => {
//   return {
//     type: GET_ARTIKEL
//   };
// };

// export const deleteArtikel = id => {
//   return {
//     type: DELETE_ARTIKEL,
//     payload: id
//   };
// };

// export const addArtikel = artikel => {
//   return {
//     type: ADD_ARTIKEL,
//     payload: artikel
//   };
// };

// export const setArtikelLoading = () => {
//   return {
//     type: ARTIKEL_LOADING
//   }
// }