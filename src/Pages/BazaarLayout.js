import React from "react";
import { Link } from "react-router-dom";
const BazaarLayout = (props) => {
  return (
    <div > 
      <nav style={{display :"flex" ,flexDirection: 'row'}}>
        <ul style={{ float: "block"}}>
        <div> 
            <Link to="/SignUp">SignUp-Page</Link>
          </div>
          <div> 
            <Link to="/Login">Login-Page</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/products">Products</Link>
          </div>  
        </ul>
      </nav>
    </div>
  )
}

export default BazaarLayout;