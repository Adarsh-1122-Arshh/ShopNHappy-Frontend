import React from "react";
import { Button } from "@mui/material";

export const ButtonComponent = (props) => {
  return (
    <div className="btn">
      {/* <button onClick={props.onButtonClick} >
        {props.buttonName}

      </button> */}
      <Button
        color={props.color}
        variant={props.buttonVariant}
        onClick={props.onClick}
      >
        {props.buttonName}
      </Button>
    </div>
  )
}

