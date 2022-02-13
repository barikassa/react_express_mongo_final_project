import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../css/home.css";

function BookList({
  bookDatas,
  setBookDatas,
  dataToDtailes,
  setdataToDtailes,
}) {
  const [show, setShow] = useState(false);

  // const [datas, setDatas] = useState([]);
  useEffect(getJason, []);
  function getJason() {
    // const url = "./json/bookList.json";
    const url = "/bookList";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        setBookDatas(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo=> send props to detailes--------------------------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    console.log(obj);
    setdataToDtailes(obj);
  };
  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;
  return (
    <div>
      {bookDatas.map((item, i) => {
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
      })}
    </div>
  );
}

export default BookList;
