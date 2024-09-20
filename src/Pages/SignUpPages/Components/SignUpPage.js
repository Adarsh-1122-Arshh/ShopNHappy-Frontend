import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabelComponent from "../../../Common/Component/LabelComponent";
import TextFeildComponent from "../../../Common/Component/TextFieldComponent";
import { signUpAction } from "../Actions/ActionBinder";
import { ButtonComponent } from "../../../Common/Component/ButoonComponent";
import { AppBarComponent } from "../../../Common/Component/AppBar";
import { useNavigate } from "react-router-dom";

export const SignUpComponent = (props) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
   const [status, setStatus] = useState("");

   const [isSignUpSuccess, setIsSignUpSuccess] = useState(-1);


   const dispatch = useDispatch();

   const signUpData = useSelector((state) => {
      return state.signUpData
   })

   console.log("signUpData in parent", signUpData)

     const navigate = useNavigate();
   // const handleOpen = () => {
   //    setIsSignUpSuccess(true);
   // };
   // const handleClose = () => {
   //    setIsSignUpSuccess(false);

   // };


   // setStoreSignUpData(signUpData.signUp);

   const onNameChange = (e1) => {
      setName(e1.target.value)
   }

   const onEmailChange = (e2) => {
      setEmail(e2.target.value)
   }

   const onGenderChange = (e3) => {
      setGender(e3.target.value)
   }

   const onStatusChange = (e4) => {
      setStatus(e4.target.value)
   }

   const onSignUp = () => {

      let userDetails = {
         name: name,
         email: email,
         gender: gender,
         status: 'active'
      }
      dispatch(signUpAction(userDetails));
      setName('');
      setEmail('');
      setGender('');
      setStatus('');

   }

   useEffect(() => {
      if (signUpData.isSignUp) {
         if (signUpData.SingleUser && signUpData.SingleUser.id) {
            setIsSignUpSuccess(1);  
         }
         else{
            setIsSignUpSuccess(0)
         }
      }
   },[signUpData])

   const closeDialog = () => {
      navigate("/Login");
      setIsSignUpSuccess(-1)
   }
   const DialogBox = (message) => {

      return (
         <Dialog
            open={true}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
            
         >
            <DialogTitle id="alert-dialog-title">
               "Your SignUp Status"
            </DialogTitle>
            <DialogContent>
               {message}
            </DialogContent>
            <DialogActions>
               
               <ButtonComponent onClick={closeDialog} autoFocus buttonName={"Okay"}/>
            </DialogActions>
         </Dialog>
      )

   }



   return (
      <div>
         <AppBarComponent />
        
         <Card>
            <CardContent>
               <h1>SignUp-Page</h1>
               <LabelComponent labelVariant={"h6"} labelText={"Name: "} />
               <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Adarh-Arshh"}
                  textVarient={"outlined"} textOnchange={onNameChange} textValue={name}
               />

               <LabelComponent labelVariant={"h6"} labelText={"Email: "} />
               <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Adarsh123@gamil.com"}
                  textVarient={"outlined"} textOnchange={onEmailChange} textValue={email}
               />

               <LabelComponent labelVariant={"h6"} labelText={"Gender"} />
               <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Gender: "}
                  textVarient={"outlined"} textOnchange={onGenderChange} textValue={gender}
               />

               {/* <LabelComponent labelVariant={"h6"} labelText={"Status: "} /> 
                <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"status"}
                  textOnchange={onStatusChange} textValue={status}
               /> */}

               <ButtonComponent onClick={onSignUp} buttonName={"Sign-Up"} buttonVariant={"contained"} />

            </CardContent>

            {(isSignUpSuccess === 1)
               ? DialogBox(`you have successfully signed Up your user Id = ${signUpData.SingleUser.id}`)
               : (isSignUpSuccess === 0)
                  ? DialogBox("something went wrong try again")
                  : null
            }
         </Card>
      </div>
   )

}