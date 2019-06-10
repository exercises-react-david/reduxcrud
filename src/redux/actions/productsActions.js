import {ADD_PRODUCT,GET_PRODUCT,UPDATE_PRODUCTS,DELETE_PRODUCT,GET_ALL_PRODUCTS} from './types';
import axios from 'axios';

export const getAllProducts = () => async dispatch =>{
    const answer = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: answer.data
    })
}

export const deleteProduct = id => async dispatch =>{
    await axios.delete(`http://localhost:5000/productos/${id}`);

    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
}