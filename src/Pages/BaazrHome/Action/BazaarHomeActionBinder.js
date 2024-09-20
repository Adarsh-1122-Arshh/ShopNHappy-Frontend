
import { fetchPromotedProducts } from "../Component/BazaarHomeAPI";
import { Fetch_Promoted_Product_Fail_Action, Fetch_Promoted_Product_Success_Action, } from "../Constants/ActionTypeConstants";

export const BazaarActionBinder =(limit,skip)=>{

    return (dispatch) =>{
        fetchPromotedProducts(limit,skip)
        .then((promotedProducts)=>{
            //  console.log("Your promotedproducts is fetched ACTION",promotedProducts);
            dispatch(
                {
                  type:Fetch_Promoted_Product_Success_Action,
                  payload: { promotedProducts: promotedProducts }
                }               
            )
           
        }        
    )
     .catch((error)=>{
        dispatch({
            type:Fetch_Promoted_Product_Fail_Action,
            payload:{promotedProducts:[]}
        })
    })
}

}

