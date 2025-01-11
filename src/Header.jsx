import React from "react";
import logo from "./Images/logo.png";
const Header=()=>{
return (
<>
<div className="header">
    <img src={logo} alt="logo" width="100" height="80"/>
    <h1>Anand keep</h1>
    {/* <h1 className="heads">WELCOME TO KEEP NOTES</h1> */}
</div>
</>
) 
};
export default Header;