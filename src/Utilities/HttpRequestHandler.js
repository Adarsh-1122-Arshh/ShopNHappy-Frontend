import axios from "axios";
const configure={
    headers : { Authorization:`Bearer 9d9b8902a6b208d0ad0aaedcf1646e15450cea746020a8949e2cfe5683b68dc0`}
}
export const getData = async (path) => {
//  return new Promise((resolve, reject) => {
//   axios.get(path, configure)
//   .then((response)=>{
//    resolve(response.data);
//   })
//   .catch((error)=>{
//     reject(error)
//   })

     
//   })
  let response = await axios.get(path, configure);
  if(response){
    return (response.data);
  }
  else { 
    return null;
  };h

}

export const post =  async (path,apiInput) => {
  // return new Promise((resolve, reject) => {
  //   axios.post(path,apiInput,configure)
  //     .then((response) => {
  //       console.log("response",response)
  //       resolve(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("________________error-----",error);
  //       reject(error);
  //     })
  // })

  let response = await axios.post(path,apiInput,configure);
  if(response && response.data){
    return  response.data;
  }
  else{
    return response;
  }
}  

//7337699536

