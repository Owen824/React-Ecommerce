import brands from "../data/brand.json"
import {CHANGE_BRAND_FILTER} from "../actions"

let initialState={
    brands: brands,
    filterOption: "All"
};

const brandFilterReducer=(state=initialState, action)=>{
    switch(action.type){
        case CHANGE_BRAND_FILTER:
            return {...state,filterOption:action.payload}
        default:
            return state    
    }
}

export default brandFilterReducer