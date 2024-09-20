import React from "react";
import  styled  from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const LabelComponent = (props) => {
  return (
    <div>
      {/* <label>
        {props.labelText}
      </label> */}
      <Typography 
       variant={props.labelVariant}  gutterBottom >
        {props.labelText}
       </Typography>
        
      
      
        
    </div>
  )
}

export default LabelComponent;