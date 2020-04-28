export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';
export const INCREASE_ITEM='INCREASE_ITEM';
export const DECREASE_ITEM='DECREASE_ITEM';

export const addProductToCart = product =>{
    return{
        type:ADD_PRODUCT_TO_CART,
        payload: product
    }
}
export const removeProductToCart = productId =>{
    return{
        type:REMOVE_PRODUCT_TO_CART,
        payload: productId
    }
}
export const increaseItem = productId =>{
    return{
        type:INCREASE_ITEM,
        payload: productId
    }
}
export const decreaseItem = productId =>{
    return{
        type:DECREASE_ITEM,
        payload: productId
    }
}

export const CHANGE_BRAND_FILTER='CHANGE_BRAND_FILTER';

export const changeBrandFilter= (brand)=>{
    return{
        type: CHANGE_BRAND_FILTER,
        payload:brand
    }
}

export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';

export const nextPage = ()=>{
    return{
        type:NEXT_PAGE
    }
};
export const prevPage = ()=>{
    return{
        type:PREV_PAGE
    }
}
export const goPage = (pageNum)=>{
    return{
        type:GO_PAGE,
        currentPage: pageNum
    }
}