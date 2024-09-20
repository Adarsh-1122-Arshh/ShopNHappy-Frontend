import { Fetch_Promoted_Product_Success_Action} from "../Constants/ActionTypeConstants";

 const intailState = {
  promotedProducts:[]
 }
export const BazaarReducerOfferProduct = (state = intailState, action) => {

  let currentState = state;
  switch (action.type) {
    case Fetch_Promoted_Product_Success_Action:
      currentState = {...currentState,
       promotedProducts: currentState.promotedProducts.concat(action.payload.promotedProducts)
      }
      break;

    default:
      break;

  }
  return currentState;
} 