import React from "react";
import { Grid } from "@mui/material";
import { ProductCardComponent } from "./ProductCardComponent";



const OfferPoductsComponent =(props)=>{
// console.log("OPC PROPs",props);

const onOfferProductClick =(category)=>{
   window.location = `/products?category=${category}`
}

return(
    <div >
        <Grid container>
        {
            props.promotedProduct.offerProducts.map((offerProduct,index2)=>{
            //console.log("---heyyy---",offerProduct)
                return(

                    <Grid item key={`offerProduct_${index2}`} lg={6}>
                    <div onClick={()=>{
                        onOfferProductClick(offerProduct.category)}} 
                        >
                    <ProductCardComponent offerProduct={offerProduct}  />
                    {/* <BazaarHome promotedProduct={props.promotedProduct.offerProduct} /> */}
                    
                    </div>
                    </Grid>
                )

                
            })
        }
   </Grid>
    </div>
)
}

export default OfferPoductsComponent;