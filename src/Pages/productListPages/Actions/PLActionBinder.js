import { ProductListAPI } from "../Api/PLAPI";
import { FETCH_PRODUCTS_FAIL_ACTION_TYPE, FETCH_PRODUCTS_SUCCESS_ACTION_TYPE } from "../Constants/ActionTypeConstants";

export const productListActionBinder = (category, limit, skip) => {
  //  in Action binder u cant't use Async await bcoz u cannnot dispatch an action so...we have to use  
  return (dispatch) => {
    ProductListAPI(category, limit, skip)
      .then((filterdProducts) => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS_ACTION_TYPE,
          payload: {
            products: filterdProducts
          }
         }
        )
      })
      .catch((error) => {
        dispatch({
          type: FETCH_PRODUCTS_FAIL_ACTION_TYPE,
          payload: { products: [] }

        })
      })
  }
}
