import React from "react";
import ImageComponent from "../../../Common/Component/ImageComponent";
import LabelComponent from "../../../Common/Component/LabelComponent";




export const ProductCardComponent =(props)=>{
    //console.log("---PCC-----",props);
    
    return(
        <div>
      
      <ImageComponent imagePath={props.offerProduct.images[0]} />
      <LabelComponent labelText={props.offerProduct.title} />
      <LabelComponent labelText={props.offerProduct.price} />
      <LabelComponent labelText={props.offerProduct.rating} />
      <LabelComponent labelText={props.offerProduct.ProductName}  labelVariant={"overline"} />
      <LabelComponent labelText={props.offerProduct.ProductPrice}  labelVariant={'h6'} />
      {/* <ButtonComponent buttonVariant={'contained'}
       buttonName={'click here'}
       color={'success'}
       
       /> */}
        </div>
    )
}

// export default ProductCardComponent;