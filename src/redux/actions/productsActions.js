import {ADD_PRODUCT,GET_PRODUCT,UPDATE_PRODUCTS,DELETE_PRODUCT,GET_ALL_PRODUCTS} from './types';
import axios from 'axios';

export const getAllProducts = () => async dispatch =>{
    const answer = await axios.get('http://localhost:5000/productos');
    dispatch({
        type: GET_ALL_PRODUCTS,
        payload: answer.data
    })
};

export const deleteProduct = id => async dispatch =>{
    await axios.delete(`http://localhost:5000/productos/${id}`);

    dispatch({
        type: DELETE_PRODUCT,
        payload: id
    })
};

export const addProduct = product => async dispatch =>{
    const answer = await axios.post(`http://localhost:5000/productos`, product);

    dispatch({
        type: ADD_PRODUCT,
        payload: answer.data
    })
};

export const getProduct = id => async dispatch =>{
    const answer = await axios.get(`http://localhost:5000/productos/${id}`);

    dispatch({
        type: GET_PRODUCT,
        payload: answer.data
    })
};

export const updateProduct = product => async dispatch =>{
    const answer = await axios.put(`http://localhost:5000/productos/${product.id}`, product);

    dispatch({
        type: UPDATE_PRODUCTS,
        payload: answer.data
    })
};