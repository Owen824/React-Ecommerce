import data from '../data/data.json'
const initialstate= {
    products: data
}

const productReducer =(state=initialstate, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default productReducer