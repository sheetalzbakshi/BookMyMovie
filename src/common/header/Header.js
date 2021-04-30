import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";

const Header = ({ bookShow, loggedIn, loginClicked, bookClicked }) => {  

    const BookShowButton = bookShow !== undefined && bookShow === true ? (
        <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}  
            onClick = {bookClicked()}                         
        >
            Book Show
        </Button>
    ) : <React.Fragment />;

    const LoginButton = loggedIn === true ? 
        <Button
            variant="contained"
            color="default"
            style={{ marginLeft: "10px" }}
            onClick = {loginClicked(false)}
        >
            Logout
        </Button>
     : 
        <Button
            variant="contained"
            color="default"
            style={{ marginLeft: "10px" }}    
            onClick = {loginClicked(true)}       
        >
            Login
        </Button>
    ;

    return (
        <React.Fragment>
            <div className="header">
                <div style={{ float: "left", display: "inline-block" }}>
                    <img src={logo} className="logo" alt="logo"></img>
                </div>
                <div style={{ float: "right", display: "inline-block" }}>
                    {BookShowButton}
                    {LoginButton}
                </div>                
            </div>
        </React.Fragment>
    );
};

export default Header;
