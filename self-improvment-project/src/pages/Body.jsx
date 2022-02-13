import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";
import { Table } from "react-bootstrap";

function Body({
  yogaData,
  setYogaData,
  TodoData,
  setTodoData,
  bodyTrainingData,
  setBodyTrainingData,
  bodyDietData,
  setbodyDietData,
  dataToDtailes,
  setdataToDtailes,
}) {
  // redrect detailes state--------------------------------------------------------------------------
  const [show, setShow] = useState(false);
  const sets = 3;
  const yogaExplain =
    "These 10 poses are a complete yoga workout. Move slowly through each pose, remembering to breathe as you move. Pause after any pose you find challenging, especially if you are short of breath, and start again when your breathing returns to normal. The idea is to hold each pose for a few, slow breaths before moving on to the next one.";

  useEffect(getData, []);
  //todo yoga api-----------------------------------------------------------------------------------
  console.log(bodyDietData);
  function getData() {
    const url = "http://yogapi.herokuapp.com/";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setYogaData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo fitness/workout json--------------------------------------------------------------------------------
  useEffect(getBodyTrainingData, []);
  function getBodyTrainingData() {
    // const url = "../json/bodyTraining.json";
    const url = "/bodyTraining";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setBodyTrainingData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo Diet json--------------------------------------------------------------------------------
  useEffect(getBodyDietData, []);
  function getBodyDietData() {
    // const url = "../json/diet.json";
    const url = "/diet";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setbodyDietData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  //todo add body yoga ------------------------------------------------------------------------------------
  const addYogaTask = (i) => {
    const copyYogaData = [...yogaData];
    const temp = [...TodoData];
    temp.push(copyYogaData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo Add body training------------------------------------------------------------------------------------
  const addTrainingTask = (i) => {
    const copyTrainingData = [...bodyTrainingData];
    const temp = [...TodoData];
    temp.push(copyTrainingData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo Add body diet------------------------------------------------------------------------------------
  const addDietTask = (i) => {
    const copyDietData = [...bodyDietData];
    const temp = [...TodoData];
    temp.push(bodyDietData[i]);
    setTodoData(temp);
    console.log({ temp });
  };
  //todo send to detailes------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    setdataToDtailes(obj);
  };

  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>bodyTrainingData</th>
          </tr>
        </thead>
        {/* ---------------------------------------------------------------------------- */}
        <div>
          {bodyTrainingData
            ? bodyTrainingData.map((item, i) => {
                return (
                  <div key={i}>
                    <tbody>
                      <tr>
                        {/* <td>
                          <p>{item.sets}</p>
                        </td> */}
                        <td>
                          {" "}
                          <ReactPlayer controls url={item.videoTrn} />
                        </td>
                        <td>
                          <p>{item.titleTrain}</p>
                        </td>
                        <td>
                          {" "}
                          <p
                            onClick={() => {
                              sendToDetailes(item);
                              setShow(true);
                            }}
                          >
                            {item.descTrn ? item.descTrn.slice(0, 100) : ""}
                          </p>
                        </td>
                        <td>
                          {/* <p>
                            <img src={item.imgTrn} alt="" style={{width:"200px", height:"360px"}}/>
                          </p> */}
                        </td>
                        <td>
                          {" "}
                          <button
                            onClick={() => {
                              addTrainingTask(i);
                            }}
                          >
                            start
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* {item.sets} */}
                    {/* {item.titleTrain} */}
                    {/* <p
                    onClick={() => {
                      sendToDetailes(item);
                      setShow(true);
                    }}
                  >
                    {item.descTrn ? item.descTrn.slice(0, 100) : ""}
                  </p> */}
                    {/* <ReactPlayer controls url={item.videoTrn} /> */}
                    {/* <img src={item.imgTrn} alt="" /> */}
                    {/* <button
                    onClick={() => {
                      addTrainingTask(i);
                    }}
                  >
                    start
                  </button> */}
                  </div>
                );
              })
            : ""}
        </div>

        <thead>
          <tr>
            <th>bodyDietData</th>
          </tr>
        </thead>
        <div>
          {bodyDietData
            ? bodyDietData.map((item, i) => {
                return (
                  <div key={i}>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <p
                            onClick={() => {
                              sendToDetailes(item);
                              setShow(true);
                            }}
                          >
                            Day{item.day ? item.day.slice(0, 100) : ""}...
                          </p>
                        </td>
                        <td>
                          <p>{item.Breakfast_menu}</p>
                        </td>
                        <td>
                          <p>{item.lunch_menu}</p>
                        </td>
                        <td>
                          <p>{item.dinner_menu}</p>
                        </td>
                        <td>
                          <p>{<img src={item.imgDiet} alt="" />}</p>
                        </td>
                        <td>
                          {" "}
                          <button
                            onClick={() => {
                              addDietTask(i);
                            }}
                          >
                            start
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    {/* <p
                    onClick={() => {
                      sendToDetailes(item);
                      setShow(true);
                    }}
                  >
                    Day{item.day ? item.day.slice(0, 100) : ""}...
                  </p> */}
                    {/* <p>{item.Breakfast_menu}</p> */}
                    {/* <p>{item.lunch_menu}</p> */}
                    {/* <p>{item.dinner_menu}</p> */}
                    {/* <img src={item.imgDiet} alt="" /> */}
                    {/* <button
                    onClick={() => {
                      addDietTask(i);
                    }}
                  >
                    start
                  </button> */}
                  </div>
                );
              })
            : ""}
        </div>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>yogaData</th>
          </tr>
        </thead>
        <div>
          {yogaData.map((item, i) => {
            return (
              <div key={i}>
                <tbody>
                  <tr>
                    {" "}
                    <td>
                      {" "}
                      <p
                        onClick={() => {
                          sendToDetailes(item);
                          setShow(true);
                        }}
                      >
                        ...
                        {item.sanskrit_name}
                      </p>
                    </td>
                    <td>
                      <p>{item.english_name}</p>
                    </td>
                    <td>
                      {" "}
                      <img
                        src={item.img_url}
                        alt=""
                        style={{ width: "380px", height: "380px" }}
                      />
                    </td>
                    <td>
                      <p>{yogaExplain.slice(0, 200)}</p>
                    </td>
                    <td>
                      <p>{sets}</p>
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          addYogaTask(i);
                        }}
                      >
                        add
                      </button>
                    </td>
                  </tr>
                </tbody>

                {/* <p
                  onClick={() => {
                    sendToDetailes(item);
                    setShow(true);
                  }}
                >
                  ...
                  {item.sanskrit_name}
                </p> */}
                {/* <p>{item.english_name}</p> */}
                {/* <img
                  src={item.img_url}
                  alt=""
                  style={{ width: "380px", height: "380px" }}
                /> */}
                {/* <button
                  onClick={() => {
                    addYogaTask(i);
                  }}
                >
                  start
                </button> */}
              </div>
            );
          })}
        </div>
      </Table>
    </div>
  );
}

export default Body;
