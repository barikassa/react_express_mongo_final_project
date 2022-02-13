import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function LogIn({ auth, setAuth,email, setEmail }) {
  // const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valid, setValid] = useState(null);


  function loginHandler() {
    // console.log({ email });
    const API_KEY = "AIzaSyCp6WHkQ-npJt23Alyi7jFL9EPneFy1v_c";
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setAuth(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }

  const isValid=()=>{
    if(!email || !password || password.length<6){
     return setValid("one of the input is empty");
    }
    else{
      return loginHandler();
    }
  }

  if (auth) {
    return <Redirect to="/Mind" />;
  }

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          isValid();
          // loginHandler();
        }}
      >
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* ---------------------------------------------------------- */}
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* ------------------------------------------------------------ */}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p style={{color:"red"}}>{valid}</p>
    </div>
  );
}

export default LogIn;
