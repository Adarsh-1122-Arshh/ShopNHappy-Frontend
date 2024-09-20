import { combineReducers } from "redux";
import { BazaarReducerOfferProduct } from "../../Pages/BaazrHome/Reducer/BazaarReducerOfferProduct";
import { signUpReducer } from "../../Pages/SignUpPages/Reducers/Reducer";
import { productListReducer } from "../../Pages/productListPages/Reducers/PLReducer";
import { LoginReducer } from "../../Pages/LoginPage/Reducers/LoginReducer";


export const reducer = combineReducers({
     signUpData : signUpReducer,
     ProductListData : productListReducer,
     promotedProductsData : BazaarReducerOfferProduct,
     userLoginData:LoginReducer
})