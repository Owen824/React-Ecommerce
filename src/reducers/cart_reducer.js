import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART,
    INCREASE_ITEM,
    DECREASE_ITEM
} from '../actions';
import data from '../data/data.json'

// console.log(Array.isArray(data));
let initialState={
    cart:[]
};


const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            return{...state,cart:[...state.cart,action.payload]}
        default:
            return state;
    }
}

export default cartReducer
