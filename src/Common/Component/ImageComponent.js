import React from "react";
const ImageComponent =(props)=>{
    return(
        <div>
            <img src={props.imagePath} alt={"just a products image"} style={{height:"100px"}}></img>
            </div>
    )
}

export default ImageComponent;