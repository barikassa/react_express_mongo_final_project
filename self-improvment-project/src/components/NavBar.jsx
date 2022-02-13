import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Mind from "../pages/Mind";
import { MdSelfImprovement } from "react-icons/md";

// MdSelfImprovement
function NavBar({ auth, setAuth }) {
  // if (auth == null) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><MdSelfImprovement/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>

                {auth ? "" : <Link to="/">Home</Link>}
                {auth ? "" : <Redirect to="/" />}
              </Nav.Link>
              <Nav.Link>
                {auth ? "" : <Link to="/Articles">Articles</Link>}
              </Nav.Link>
              <Nav.Link>
                {auth ? "" : <Link to="/Contact">Contact Us</Link>}
              </Nav.Link>
              {/* ------------------------------------------------------- */}
              <Nav.Link>
                {auth ? <Link to="/Mind">Mind</Link> : ""}
              </Nav.Link>{" "}
              <Nav.Link>{auth ? <Link to="/Body">Body</Link> : ""}</Nav.Link>
              <Nav.Link>{auth ? <Link to="/TodoList">Todo-List</Link> : ""}</Nav.Link>
              <Nav.Link>{auth ? <Link to="/ComplitedList">Complited-List</Link> : ""}</Nav.Link>
              <Nav.Link>{auth ? <Link to="/Forum">Forum</Link> : ""}</Nav.Link>
              {/* ------------------------------------------------------- */}
            </Nav>
            <Nav>
              <Nav.Link>{auth ? "" : <Link to="/LogIn">LogIn</Link>}</Nav.Link>
              <Nav.Link>{auth ? "" : <Link to="/Join">Join</Link>}</Nav.Link>
              {auth ? (
                <Button
                  onClick={() => {
                    setAuth(null);
                  }}
                >
                  LogOut
                </Button>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
