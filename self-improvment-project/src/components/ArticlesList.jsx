import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../css/home.css";

function ArticlesList(
  datafromArcToDtailes,
  setDatafromArcToDtailes,
  dataToDtailes,
  setdataToDtailes
) {
  const [arcData, setArcData] = useState([]);
  const [show, setShow] = useState(false);
  const [x, setx] = useState();

  useEffect(getJason, []);
  function getJason() {
    // const url = "./json/articles.json";
    const url = "/articleListToArticleComponent";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setArcData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  // todo=> send props to detailes--------------------------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    setdataToDtailes(obj);
    console.log("obj", obj);
  };
  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;

  return (
    <div>
      {arcData
        ? arcData.map((item, i) => {
            return (
              <div key={i} className="divHandler">
                <p>{item.title}</p>
                <img src={item.img} alt="" className="imgHandler" />
                <p
                  onClick={() => {
                    sendToDetailes(item);
                    setShow(true);
                  }}
                >
                  {item.discreption.slice(0, 200)}...
                </p>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default ArticlesList;
