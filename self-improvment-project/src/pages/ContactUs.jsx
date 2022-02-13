import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function ContactUs() {
  const [name, setName] = useState(null);
  const [pNumber, setPnumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [messege, setMessege] = useState(null);
  const [valid, setValid] = useState(null);



  function postToServer() {
    const url = "/Contact";
    axios
      .post(url, {
        name: name,
        pNumber: pNumber,
        email: email,
        messege: messege,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

const isValid=()=>{
  if(name == null|| pNumber == null||email == null||messege == null){
   return setValid("one of the input is empty");
  }
  else{
    return postToServer();
  }
}
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          isValid();
          // postToServer();
        }}
      >
        <Form.Group className="mb-3" >
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <Form.Group className="mb-3" >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="number"
            onChange={(e) => setPnumber(e.target.value)}
          />
        </Form.Group>

        {/* ------------------------------------------------------------------------------------------------------- */}
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* ------------------------------------------------------------------------------------------------------- */}

        <Form.Group className="mb-3" >
          <Form.Label>Messege</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setMessege(e.target.value)}
          />
          <Button type="submit" >click</Button>
        </Form.Group>
      </Form>
      <p style={{color:"red"}}>{valid}</p>
    </div>
  );
}

export default ContactUs;
