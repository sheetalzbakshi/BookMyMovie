import React from 'react';
import './Header.css';
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';

const Header = ()=>{
    return (
        <React.Fragment>
            <div className="header">
                <div style={{float:"left", display:"inline-block"}}>
                    <img src ={logo} className="logo" alt="logo"></img>
                </div>
                <div style={{float:"right", display:"inline-block"}}>
                    <Button variant="contained" color="primary" style={{marginLeft:"10px"}}>Book Show</Button>
                    <Button variant="contained" color="default" style={{marginLeft:"10px"}}>Logout</Button>
                    <Button variant="contained" color="default" style={{marginLeft:"10px"}}>Login</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;