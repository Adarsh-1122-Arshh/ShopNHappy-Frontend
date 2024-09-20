import React from "react";
import BazaarLayout from "./BazaarLayout";
import LabelComponent from "../Common/Component/LabelComponent";
import { useState } from "react";


import Card from '@mui/material/Card';
import TextFeildComponent from "../Common/Component/TextFieldComponent";
import { ButtonComponent } from "../Common/Component/ButoonComponent";

export const LoginBazaarComponent = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setpassword] = useState('');

  const onNameChange = (event1) => {
    setName(event1.target.value);
  }
  const onEmailChange = (event2) => {
    setEmail(event2.target.value);
  }
  const onLoginChange = (event3) => {
    setLogin(event3.target.value);
  }
  const onPasswordChange = (event4) => {
    setpassword(event4.target.value);
  }

  const onAdd = () => {

    let loginDetails = {
      name: name,
      email: email,
      login: login,
      password: password
    }
    props.onLogin(loginDetails);
    setName("");
    setEmail("");
    setLogin("");
    setpassword("");
        
    }

    const onSubmit=()=>{

    }
  return (
    <div className="login-page">
      <BazaarLayout />
      < h1 style={{ color: "red" }}>home-Page</h1>

      <Card sx={{ maxWidth: 360 }}>

        <div className="login-Page">
          <LabelComponent labelVariant={"h6"} labelText={"Name: "} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Adarh-Arshh"}
            textVarient={"outlined"}
            textOnchange={onNameChange}
            textValue={name}
          />


          <LabelComponent labelVariant={"h6"} labelText={"EMail: "} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Adarsh-arshh@gmailcom"}
            textVarient={"outlined"}
            textOnchange={onEmailChange}
            textValue={email}
          />


          <LabelComponent labelVariant={"h6"} labelText={"Login :"} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Logi-Id"}
            textVarient={"outlined"}
            textOnchange={onLoginChange}
            textValue={login}

          />

          <LabelComponent labelVariant={"h6"} labelText={"Password :"} />
          <TextFeildComponent textId={"input-with-icon-adornment"} textLabel={"Password"}
            textVarient={"outlined"}
            textOnchange={onPasswordChange}
            textValue={password}

          />

          <ButtonComponent onButtonClick={onSubmit}
            buttonVariant={'contained'}
            buttonName={"Log-in"}
            onclick={onAdd}
          />

          <ButtonComponent
            buttonVariant={"contained"}
            buttonName={"Create-Account"}

          />
        </div>

      </Card>

      <p style={{ color: "Blue" }}>
        here you can Choose any Pages to go for that
      </p>
    </div>
  )
}
