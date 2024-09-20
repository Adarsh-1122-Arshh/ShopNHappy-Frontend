import { PRODUCTS_API_PATH } from "../../../Common/Constants/APIConstants";
import { getData } from "../../../Utilities/HttpRequestHandler";


export const ProductListAPI = async (category, limit, skip) => {
   // return new Promise((resolve, reject) => {
     let resp =  await getData(`${PRODUCTS_API_PATH}?limit=${limit}&skip=${skip}`)
            if(resp && resp.products){
             // console.log("ABC",response.products)
                let products = resp.products;
                let filterdProducts = [];
                  
                if(category){
                  for (let i = 0; i < products.length; i++) {
                    let product = products[i];

                        if(product.category === category) {
                            filterdProducts.push(product);
                        }
                } 
                // console.log('---filterdProds', filterdProducts)
                return (filterdProducts);
              }
              else{
                return(resp.products)
              }
            }
            
          //   else {
          //     return(resp);
          // }

   // })
}




