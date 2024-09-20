import { signUpAPI } from "../API/signUpAPI"
import { Action_Type_SignUp_Failure, Action_Type_SignUp_success } from "../Constants/ActionTypeConstants"


export const signUpAction =(userDetails)=>{
    // console.log("inACTIONSU",userDetails)
    return(dispatch)=>{
        signUpAPI(userDetails)
        .then((postData)=>{
            console.log("signup dta",postData)
     dispatch({
        type : Action_Type_SignUp_success,
        payload : {user: postData} 
    }
     )
    }
)
.catch((error)=>{
    dispatch({
    type: Action_Type_SignUp_Failure
})
   
    })
}
}