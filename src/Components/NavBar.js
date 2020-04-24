import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import history from "../Utils/history";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Dominoes Score</Typography>
        {isAuthenticated && (
          <div>
            <Link to="/">Home</Link>&nbsp;
            <Button onClick = {() =>history.push('/home')}>Home</Button>
            <Button onClick = {() =>history.push('/profile')}>Profile</Button>
            <Button onClick = {() =>history.push('/external-api')}>External API</Button>
          </div>
        )}
        
        {!isAuthenticated && (
          <Button onClick={() => !loading && loginWithRedirect({})}>Log in</Button>
        )}
        
        {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        {/* {isAuthenticated && (
          
                <Link to="/">Home</Link>&nbsp;
                <Link to="/home">home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/external-api">External API</Link>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;