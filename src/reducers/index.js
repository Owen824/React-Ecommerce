import {combineReducers} from "redux"
import cartReducer from "./cart_reducer"
import brandFilterReducer from "./brandFilter_reducer"
import productReducer from "./product_reducer"
import paginationReducer from "./pagination_reducer"

export default combineReducers({
    cartReducer,
    brandFilterReducer,
    productReducer,
    paginationReducer

});