import { Action_Type_SignUp_Failure, Action_Type_SignUp_success } from "../Constants/ActionTypeConstants";

 let intialState ={
   isSignUp : false,
    SingleUser : {

    }
 }
export const signUpReducer=(state=intialState, action)=>{
    let currentState = state;
     switch(action.type){
        case Action_Type_SignUp_success:
            currentState={...currentState,
              SingleUser : action.payload.user,
            isSignUp : true,
            }
            break;
            case Action_Type_SignUp_Failure:
              currentState={
                ...currentState,
                isSignUp:false
              }
              break;


     }
     return currentState;
}