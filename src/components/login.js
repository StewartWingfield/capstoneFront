import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";

const LogIn = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    /* props.logInUser(state.username); */
    e.preventDefault();
    document.cookie = cookie.serialize("loggedIn", true, {
      maxAge: 60 * 60,
    });
    /* props.logOutUser(); */
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            variant="standard"
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            variant="standard"
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default LogIn;
