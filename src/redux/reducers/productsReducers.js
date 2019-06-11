import {ADD_PRODUCT,GET_PRODUCT,UPDATE_PRODUCTS,DELETE_PRODUCT,GET_ALL_PRODUCTS} from '../actions/types';

const initialState = {
    products: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        case UPDATE_PRODUCTS:
            return{
                ...state,
                products: state.products.map(
                    product => product.id === action.payload.id ? (product = action.payload) : product
                )
            }
        default:
            return state
    }
}