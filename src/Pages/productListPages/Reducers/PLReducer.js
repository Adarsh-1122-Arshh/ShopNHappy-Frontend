import { FETCH_PRODUCTS_SUCCESS_ACTION_TYPE } from "../Constants/ActionTypeConstants";

const intailState = {
    products: []
}
export const productListReducer = (state = intailState, action) => {
    let currentListState = state;
    //  console.log("actionin-reducer",action)
        switch (action.type) {
            
            case FETCH_PRODUCTS_SUCCESS_ACTION_TYPE :
                currentListState = {
                    ...currentListState,
                    products: currentListState.products.concat(action.payload.products)
                }    
                
                break;
    
            default:
                break;
        }
        // console.log("inReducer",currentListState)
    return currentListState
    
}