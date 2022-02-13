import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Articles from "./pages/Articles";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/LogIn";
import Join from "./pages/Join";
import { useState, useContext } from "react";
import Mind from "./pages/Mind";
import Body from "./pages/Body";
import TodoList from "./pages/TodoList";
import ComplitedList from "./pages/ComplitedList";
import Forum from "./pages/Forum";
import Detailes from "./pages/Detailes";

function App() {
  const [auth, setAuth] = useState(null);
  const [bookDatas, setBookDatas] = useState([]);
  const [yogaData, setYogaData] = useState([]);
  // ------------------------------------------------------------------------------
  const [TodoData, setTodoData] = useState([]);
  const [ComplitedData, setComplitedData] = useState([]);
  // mind json -------------------------------------------------------------------------
  const [mindVideoData, setmindVideoData] = useState([]);
  const [mindArticleData, setmindArticleData] = useState([]);
  //body json -------------------------------------------------------------------------------
  const [bodyTrainingData, setBodyTrainingData] = useState([]);
  const [bodyDietData, setbodyDietData] = useState([]);
  // forum email -------------------------------------------------------------------------
  const [email, setEmail] = useState([]);
  // show detailes on detailes-------------------------------------------------------------------------
  const [dataToDtailes, setdataToDtailes] = useState([]);
  const [datafromArcToDtailes, setDatafromArcToDtailes] = useState();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar auth={auth} setAuth={setAuth} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                auth={auth}
                setAuth={setAuth}
                bookDatas={bookDatas}
                setBookDatas={setBookDatas}
                dataToDtailes={dataToDtailes}
                setdataToDtailes={setdataToDtailes}
                datafromArcToDtailes={datafromArcToDtailes}
                setDatafromArcToDtailes={setDatafromArcToDtailes}
              />
            )}
          />
          <Route
            exact
            path="/Articles"
            render={() => <Articles auth={auth} setAuth={setAuth} />}
          />
          <Route
            exact
            path="/Contact"
            render={() => <ContactUs auth={auth} setAuth={setAuth} />}
          />
          {/* ---------------------------------------------------------------------------- */}

          <Route
            exact
            path="/Mind"
            render={() => (
              <Mind
                auth={auth}
                setAuth={setAuth}
                bookDatas={bookDatas}
                setBookDatas={setBookDatas}
                TodoData={TodoData}
                setTodoData={setTodoData}
                mindVideoData={mindVideoData}
                setmindVideoData={setmindVideoData}
                mindArticleData={mindArticleData}
                setmindArticleData={setmindArticleData}
                dataToDtailes={dataToDtailes}
                setdataToDtailes={setdataToDtailes}
              />
            )}
          />
          <Route
            exact
            path="/Body"
            render={() => (
              <Body
                auth={auth}
                setAuth={setAuth}
                yogaData={yogaData}
                setYogaData={setYogaData}
                TodoData={TodoData}
                setTodoData={setTodoData}
                bodyTrainingData={bodyTrainingData}
                setBodyTrainingData={setBodyTrainingData}
                bodyDietData={bodyDietData}
                setbodyDietData={setbodyDietData}
                dataToDtailes={dataToDtailes}
                setdataToDtailes={setdataToDtailes}
                // datafromArcToDtailes={datafromArcToDtailes}
                // setDatafromArcToDtailes={setDatafromArcToDtailes}
              />
            )}
          />
          <Route
            exact
            path="/TodoList"
            render={() => (
              <TodoList
                auth={auth}
                setAuth={setAuth}
                TodoData={TodoData}
                setTodoData={setTodoData}
                ComplitedData={ComplitedData}
                setComplitedData={setComplitedData}
              />
            )}
          />
          <Route
            exact
            path="/ComplitedList"
            render={() => (
              <ComplitedList
                auth={auth}
                setAuth={setAuth}
                ComplitedData={ComplitedData}
                setComplitedData={setComplitedData}
              />
            )}
          />

          <Route
            exact
            path="/Detailes"
            render={() => (
              <Detailes
                auth={auth}
                setAuth={setAuth}
                TodoData={TodoData}
                setTodoData={setTodoData}
                mindArticleData={mindArticleData}
                mindVideoData={mindVideoData}
                dataToDtailes={dataToDtailes}
                setdataToDtailes={setdataToDtailes}
                datafromArcToDtailes={datafromArcToDtailes}
                setDatafromArcToDtailes={setDatafromArcToDtailes}
              />
            )}
          />

          <Route
            exact
            path="/Forum"
            render={() => (
              <Forum
                auth={auth}
                setAuth={setAuth}
                email={email}
                setEmail={setEmail}
              />
            )}
          />

          {/* ---------------------------------------------------------------------------- */}
          <Route
            exact
            path="/LogIn"
            render={() => (
              <LogIn
                auth={auth}
                setAuth={setAuth}
                email={email}
                setEmail={setEmail}
              />
            )}
          />
          <Route
            exact
            path="/Join"
            render={() => <Join auth={auth} setAuth={setAuth} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
