import React from "react";

import TextField from '@mui/material/TextField';


const TextFeildComponent = (props) => {
  return(
    // <div>
    //   <input type={"text"} value={props.textValue}>
    //   </input>
    // </div>
    
    <TextField id={props.textId} label={props.textLabel} variant={props.textVarient}
    value={props.textValue}
    onChange={props.textOnchange} 
    /> 
    
  )
}

export default TextFeildComponent;