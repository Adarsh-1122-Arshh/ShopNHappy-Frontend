import { getData } from "../../../Utilities/HttpRequestHandler";

export const LoginAPI = async (loginData) => {
  // return new Promise((resolve, reject) => {

  //   console.log("ismartttt", loginData.id);
  //   getData(`https://gorest.co.in/public/v2/users/${loginData.id}`)
  //     .then((fetchLoginData) => {
  //       // console.log("LOginAPI",fetchLoginData)
  //       //logic
  //       if (loginData.id == fetchLoginData.id && loginData.email == fetchLoginData.email) {
  //         resolve(fetchLoginData)
  //       }


  //     })
  //     .catch((error) => {
  //       reject(error);
  //     })

  // })







  // usng async await to handle asyn operation
  let fetchLoginData = await getData(`https://gorest.co.in/public/v2/users/${loginData.id}`);
  if (fetchLoginData) {
    if (loginData.id == fetchLoginData.id && loginData.email == fetchLoginData.email) {
      return (fetchLoginData)
    }
    else {
      return (fetchLoginData);
    }
  }
}