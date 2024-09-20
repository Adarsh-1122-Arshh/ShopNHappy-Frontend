import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelComponent from "../../../Common/Component/LabelComponent";
import { Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import TextFeildComponent from "../../../Common/Component/TextFieldComponent";
import { AppBarComponent } from "../../../Common/Component/AppBar";
import { ButtonComponent } from "../../../Common/Component/ButoonComponent";
import { LoginActionBinder } from "../Actions/LoginActionBinder";
import { Navigate, useNavigate } from "react-router-dom";


export const LoginComponent = (props) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [isLogin, setisLogin] = useState(-1);


  const dispatch = useDispatch();

  const getlogininfo = useSelector((state) => {
    return state.userLoginData
  }
  )

  const navigate = useNavigate();

  // console.log("Inlogin", getlogininfo);

  useEffect(() => {
    console.log('----getlogininfo.loginData ', getlogininfo.loginData)
    if (getlogininfo && getlogininfo.isLoggedIn == 1) {
      if (getlogininfo.loginData && getlogininfo.loginData.id) {
        setisLogin(1);
       
      }
      
    } else if (getlogininfo && getlogininfo.isLoggedIn == 0) {
      setisLogin(0);
      navigate("/Login")
    }
  }, [getlogininfo]);

  const onIdChange = (e1) => {
    setId(e1.target.value);
  }
  const onEmailChange = (e2) => {
    setEmail(e2.target.value);
  }

  const closeDialog = () => {
    setisLogin(-1);
    navigate("/")
  }

  const onLogin = () => {
    let loginData = {
      id: id,
      email: email
    }


    dispatch(LoginActionBinder(loginData));

  }

  const DialogBox = (message) => {
    return (
      <Dialog
        open={true}
        onClose={closeDialog}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          "Your Login Status"
        </DialogTitle>
        <DialogContent>
          {message}
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={closeDialog} buttonName={"Okay"} buttonVariant={"contained"} />
        </DialogActions>
      </Dialog>
    )

  }

  return (
    <div>
      <AppBarComponent />
      <Grid container spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      style={{ minHeight: '100vh' }} >
    
             {/* <Grid item1 md={12} />
            </Grid>  */}
                    
            
             

       <Grid item lg={12}> 
      <Card style={{width:"600px", alignItems:"center", justifyContent:"center"}}>

        <CardContent style={{alignItems:"center",justifyContent:"center"}}>
          <h1>Login</h1>
          <LabelComponent labelVariant={"h6"} labelText={"Id : "} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"ID"}
            textVarient={"outlined"} textOnchange={onIdChange} textValue={id} />

          <LabelComponent labelVariant={"h6"} labelText={"Email: "} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Adarsh@gmail.com"}
            textVarient={"outlined"} textOnchange={onEmailChange} textValue={email} />

          <ButtonComponent onClick={onLogin} buttonName={"Login"} buttonVarient={"contained"} />
          </CardContent>
          
           {(isLogin === 1)
          ? DialogBox(`you are succesfully login Into your Accunt Mr ${getlogininfo.loginData.name}`)
          : (isLogin === 0)
            ? DialogBox(`Login is unSuccessfull please Try Again`)
            :
            null
        }
      </Card>
      </Grid>
      </Grid>
      {/* </Grid>
     </Grid>  */}

      {/* <Grid>
             <Grid item1 md={12} />
            </Grid> */}
    </div>
  )
}