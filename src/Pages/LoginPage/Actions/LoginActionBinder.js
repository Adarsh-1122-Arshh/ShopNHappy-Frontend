import { Fetch_user_login_action_Failure, Fetch_user_login_action_Success } from "../Constants/TypeConstants"
import { LoginAPI } from "../LoginAPI/LoginAPI";

export const LoginActionBinder =(loginData)=>{
    return(dispatch)=>{
        // console.log("LoginDataACT: ",loginData)
        LoginAPI(loginData)
        .then((login)=>{
            //  console.log("Login",login)
            dispatch({
                type:Fetch_user_login_action_Success,
                payload:{login:login}
             })
        })
        .catch((error)=>{
          console.log('--- login fail --')
            dispatch({
            type:Fetch_user_login_action_Failure,
        })
    })
       
    }
}