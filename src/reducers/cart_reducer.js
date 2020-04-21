import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART,
    INCREASE_ITEM,
    DECREASE_ITEM
} from '../actions';
import data from '../../public/data.json'

// console.log(Array.isArray(data));
let initialState={
    products:data,
    cart:[]
};


const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            return{}
        default:
            return state;
    }
}

export default cartReducer
