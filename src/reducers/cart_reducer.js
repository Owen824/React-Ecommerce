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
    let updatedCart;
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            return {...state,cart:[...state.cart,action.payload]}
        case REMOVE_PRODUCT_TO_CART:
            // console.log(`hihi ${action.payload}`);
            updatedCart=[...state.cart];
            updatedCart.splice(action.payload,1);
            return {...state,cart:updatedCart}
        case INCREASE_ITEM:
            updatedCart=[...state.cart];
            if(updatedCart[action.payload].quantity!==10){
                updatedCart[action.payload].quantity++;
            }
            return {...state,cart:updatedCart}
        case DECREASE_ITEM:
            updatedCart=[...state.cart];
            console.log(`check ${updatedCart[action.payload].quantity}`);
            console.log(`check ${typeof updatedCart[action.payload].quantity}`);
            
            if(updatedCart[action.payload].quantity!==1){
                updatedCart[action.payload].quantity--;
            }
            return {...state,cart:updatedCart}    
        default:
            return state;
    }
}

export default cartReducer
