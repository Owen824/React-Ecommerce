import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_TO_CART,
    INCREASE_ITEM,
    DECREASE_ITEM
} from '../actions';
let initialState={
    cart:[]
};


const cartReducer = (state=initialState, action)=>{
    let updatedCart;
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            return {...state,cart:[...state.cart,action.payload]}
        case REMOVE_PRODUCT_TO_CART:
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
            if(updatedCart[action.payload].quantity!==1){
                updatedCart[action.payload].quantity--;
            }
            return {...state,cart:updatedCart}    
        default:
            return state;
    }
}

export default cartReducer
