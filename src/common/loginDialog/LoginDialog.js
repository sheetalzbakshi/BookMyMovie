import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Login from '../login/Login';
import Register from '../register/Register';



const LoginDialog = ({onLogin}) =>{    

  const LOGIN = 0;;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {    
    setValue(newValue);
  };

  const loginHandler = ()=>{
    onLogin();
  }

  const ViewToShow = value === LOGIN ?  <Login onLoggedIn ={loginHandler} /> :  <Register/>;

    return (
      <Paper elevation={0}>
        <Tabs
          value={value}
          indicatorColor="secondary"         
          onChange={handleChange}
          aria-label="Login or Register"
      >
        <Tab label="Login" /> 
        <Tab label="Register" />
      </Tabs>
        {ViewToShow}
       </Paper>
    );

}

export default LoginDialog;