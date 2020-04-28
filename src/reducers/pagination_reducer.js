import {
    PREV_PAGE,
    NEXT_PAGE,
    GO_PAGE
} from "../actions"

const initialState ={
    currentPage: 1,
    itemToShow: 9
}
const paginationReducer =(state=initialState, action)=>{
    switch(action.type){
        case PREV_PAGE:
            return {...state, currentPage:state.currentPage-1}
        case NEXT_PAGE:
            return {...state, currentPage:state.currentPage+1}
        case GO_PAGE:
            return {...state, currentPage:action.currentPage}
        default:
            return state
    }
}

export default paginationReducer