import { post } from "../../../Utilities/HttpRequestHandler";


export const signUpAPI=async (userDetails)=>{
    // return new Promise((resolve,reject)=>{
    //   //  console.log("SignUp API",userDetails);
    //         post("https://gorest.co.in/public/v2/users",userDetails)
    //        .then((postData)=>{
    //         // console.log("00000000000",postData);
    //         resolve(postData);
    //        })
    //        .catch((error)=>{
    //          reject(error);
    //        }
    //     )
    // })
    let postData= await post("https://gorest.co.in/public/v2/users",userDetails)
    console.log("signup Data: ",postData);
    if(postData !==0){
      return postData;
    }
    else{
      return postData
    }
}
