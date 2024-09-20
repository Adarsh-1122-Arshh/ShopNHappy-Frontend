import { PRODUCTS_API_PATH } from "../../../Common/Constants/APIConstants";
import { getData } from "../../../Utilities/HttpRequestHandler";



export const  fetchPromotedProducts = async () => {
// return new Promise((resolve,reject)=>{
//   getData(PRODUCTS_API_PATH)
//  .then((response)=>{
//   // console.log("RESPONSEIN API",response);
    
//     let products = response.products;
    
//     let promotedProducts =[];

//     for( let i=0; i<products.length; i++){
//       let product = products[i];
//     // console.log("catergory====",product);
//       let isProductAdded = false;
//       for( let j=0; j<promotedProducts.length; j++){
//           let promotedProduct = promotedProducts[j];
//           // console.log("PPCaterory123444",promotedProduct.category);
//           if(promotedProduct.category === product.category){
//             promotedProduct.offerProducts.push(product);
//             isProductAdded = true;
//           }
//       }
//       if(isProductAdded == false){
//         let promotedProduct={
//           category:product.category,
//           offerProducts:[product]
//         }
//         promotedProducts.push(promotedProduct);
//       }
//     }
//     console.log("promotedProducts", promotedProducts)
//     resolve(promotedProducts);
// })
// .catch((error)=>{
//   //console.log("Error",error);
//     reject(error);
//    }) 
// })

let response = await getData(PRODUCTS_API_PATH);
console.log("INBAZAR HOME API :",response);
if(response){
    let products = response.products;
    let promotedProducts =[];

    for( let i=0; i<products.length; i++){
      let product = products[i];
      let isProductAdded = false;

      for( let j=0; j<promotedProducts.length; j++){
        let promotedProduct = promotedProducts[j];
        if((promotedProduct.category === product.category) && promotedProduct.offerProducts && promotedProduct.offerProducts.length < 4){
          promotedProduct.offerProducts.push(product);
          isProductAdded = true;
        }
      }

        if(isProductAdded == false){
          let promotedProduct={
            category:product.category,
            offerProducts:[product]
          }
          promotedProducts.push(promotedProduct);
        }
      }
      console.log("ksnkgnfkdg,",promotedProducts);
      return(promotedProducts);
    }
    else{
      return response;
    }
  }
  


  //  const promotedProductsFromAPI =[
  //   {
  //     id: "1",
  //     offerProducts: [{
  //       productNO: "01",
  //       productImage: "https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY327_FMwebp_QL65_.jpg",
  //       ProductName: "Samsung 4k Supported TV ",
  //       ProductPrice: "200000 Rs"
  //     },
  //     {
  //       productNO: "02",
  //       productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //       ProductName: "LG Washing-Machine",
  //       ProductPrice: "90000 Rs"
  //     },
  //     {
  //       productNO: "03",
  //       productImage: "https://m.media-amazon.com/images/I/71sK2zqXWsL._SL1500_.jpg ",
  //       ProductName: "Refrigerator with Door-cooling",
  //       ProductPrice: "130000 Rs"
  //     },
  //     {
  //       productNO: "04",
  //       productImage: "https://m.media-amazon.com/images/I/61abiT+5nlL._SL1100_.jpg ",
  //       ProductName: "L Shape Sofa Set ",
  //       ProductPrice: "80000 Rs"
  //     }]
  //   },
  //   {
  //     id: "2",

  //     offerProducts: [{
  //       productNO: "05",
  //       productImage: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
  //       ProductName: "MacBook pro M3",
  //       ProductPrice: " 300000 Rs"
  //     },
  //     {
  //       productNO: "06",
  //       productImage: "https://m.media-amazon.com/images/I/61VQTLVxvGL._SL1000_.jpg ",
  //       ProductName: "Sony PS-5",
  //       ProductPrice: "90000 Rs"
  //     },
  //     {
  //       productNO: "07",
  //       productImage: "https://m.media-amazon.com/images/I/41O5+uieq8L._AC_UL480_FMwebp_QL65_.jpg",
  //       ProductName: "V-guard WaterPump",
  //       ProductPrice: "30000 Rs"
  //     },
  //     {
  //       productNO: "08",
  //       productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //       ProductName: "Vaccume-cleaner",
  //       ProductPrice: "40000 Rs"
  //     }],
  //   },
  //   {
  //     id: "3",
  //     offerProducts: [{
  //       productNO: "01",
  //       productImage: "https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY327_FMwebp_QL65_.jpg",
  //       ProductName: "Samsung 4k Supported TV ",
  //       ProductPrice: "200000 Rs"
  //     },
  //     {
  //       productNO: "02",
  //       productImage: "https://www.lg.com/content/dam/channel/wcms/in/images/cashback/fhm1065sdw/450x450.jpg ",
  //       ProductName: "LG Washing-Machine",
  //       ProductPrice: "90000 Rs"
  //     },
  //     {
  //       productNO: "03",
  //       productImage: "https://m.media-amazon.com/images/I/71sK2zqXWsL._SL1500_.jpg ",
  //       ProductName: "Refrigerator with Door-cooling",
  //       ProductPrice: "130000 Rs"
  //     },
  //     {
  //       productNO: "04",
  //       productImage: "https://m.media-amazon.com/images/I/61abiT+5nlL._SL1100_.jpg ",
  //       ProductName: "L Shape Sofa Set ",
  //       ProductPrice: "80000 Rs"
  //     }]
  //   },
  //   {
  //     id: "4",

  //     offerProducts: [{
  //       productNO: "05",
  //       productImage: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
  //       ProductName: "MacBook pro M3",
  //       ProductPrice: " 300000 Rs"
  //     },
  //     {
  //       productNO: "06",
  //       productImage: "https://m.media-amazon.com/images/I/61VQTLVxvGL._SL1000_.jpg ",
  //       ProductName: "Sony PS-5",
  //       ProductPrice: "90000 Rs"
  //     },
  //     {
  //       productNO: "07",
  //       productImage: "https://m.media-amazon.com/images/I/41O5+uieq8L._AC_UL480_FMwebp_QL65_.jpg",
  //       ProductName: "V-guard WaterPump",
  //       ProductPrice: "30000 Rs"
  //     },
  //     {
  //       productNO: "08",
  //       productImage: "https://m.media-amazon.com/images/I/41tjAHS+Z8L._SY300_SX300_.jpg ",
  //       ProductName: "Vaccume-cleaner",
  //       ProductPrice: "40000 Rs"
  //     }],
  //   }
  // ];


  // return new Promise((resolve, reject) => {

  //   if (promotedProductsFromAPI && promotedProductsFromAPI.length > 0) {
  //     resolve(promotedProductsFromAPI);
  //     console.log("============",promotedProductsFromAPI);
  //   }
    
  //   else {
  //     reject(null);
  //   }
    
 // })
  
//     return new Promise((resolve,reject)=>{
//       getData("https://dummyjson.com/products");
//     })
    
    
// }
