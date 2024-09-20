import { AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import { ButtonComponent } from "./ButoonComponent";
import BazaarLayout from "../../Pages/BazaarLayout";
import { useNavigate } from "react-router-dom";

export const AppBarComponent = (props) => {


  const navigate = useNavigate();

  const onLoginClick = ()=>{
    navigate("/Login")
  }

  const onSignUpClick = ()=>{
    console.log("nothig");
    navigate("/SignUp")
  }
  return (
    < Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon />   */}
             
           </IconButton>  
          <Typography varient="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=>{navigate("/")}}>
            Shop&Happy
          </Typography>
          < BazaarLayout />
          <ButtonComponent  onClick={onLoginClick} color={"inherit"} buttonName={"Login"}></ButtonComponent>
          <ButtonComponent onClick={onSignUpClick} color={"inherit"} buttonName={"SignUp"}></ButtonComponent>
        </Toolbar>
      </AppBar>
    </Box>
  );
}