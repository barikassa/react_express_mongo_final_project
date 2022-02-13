import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";
import Detailes from "./Detailes";

function Mind({
  auth,
  setAuth,
  bookDatas,
  setBookDatas,
  TodoData,
  setTodoData,
  mindVideoData,
  setmindVideoData,
  mindArticleData,
  setmindArticleData,
  dataToDtailes,
  setdataToDtailes,
}) {
  // redrect detailes state--------------------------------------------------------------------------
  const [show, setShow] = useState(false);
  // console.log("bookdatas", bookDatas);
  //todo jason video data----------------------------------------------------------------------------------
  useEffect(getMindVideoData, []);
  useEffect(getMindArticleData, []);
  function getMindVideoData() {
    // const url = "./json/mindVideos.json";
    const url = "/mindVideo";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setmindVideoData(response.data);
        // console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  //todo jason article data----------------------------------------------------------------------------------
  function getMindArticleData() {
    // const url = "./json/mindArticles.json";
    const url = "/mindArticle";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setmindArticleData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  // todo=> add book--------------------------------------------------------------------------------------------------------
  const addBookTask = (i) => {
    const copyBookDatas = [...bookDatas];
    const temp = [...TodoData];
    temp.push(copyBookDatas[i]);
    setTodoData(temp);
  };

  // todo=> add mind article--------------------------------------------------------------------------------------------------------
  const addMindArticleTask = (i) => {
    const copyMindArticleDatas = [...mindArticleData];
    const temp = [...TodoData];
    temp.push(mindArticleData[i]);
    setTodoData(temp);
  };
  // todo=> add mind Video--------------------------------------------------------------------------------------------------------
  const addMindVideoTask = (i) => {
    const copyMindVideoDatas = [...mindVideoData];
    const temp = [...TodoData];
    temp.push(copyMindVideoDatas[i]);
    setTodoData(temp);
  };
  // todo=> send props to detailes--------------------------------------------------------------------------------------------------------
  const sendToDetailes = (obj) => {
    setdataToDtailes(obj);
  };

  // todo=> redirect to detailes--------------------------------------------------------------------------------------------------------
  if (show) return <Redirect to="/Detailes" />;
  // todo=> backToMind--------------------------------------------------------------------------------------------------------
  const BackTooMind = () => {};
  // ------------------------------------------------------------------------------------------------------------

  return (
    <div>
      {mindArticleData
        ? mindArticleData.map((item, i) => {
            return (
              <div key={i}>
                {item.id}
                {item.titleArc}
                <p
                  onClick={() => {
                    sendToDetailes(item);
                    setShow(true);
                  }}
                >
                  {item.story.slice(0, 100)}...
                </p>
                <img
                  src={item.imgArc}
                  alt=""
                  // onClick={() => {
                  //   setShow(true);
                  // }}
                />
                <button
                  onClick={() => {
                    addMindArticleTask(i);
                  }}
                >
                  start
                </button>
              </div>
            );
          })
        : ""}
      {/* ------------------------------------------------------------------------------- */}
      {mindVideoData
        ? mindVideoData.map((item, i) => {
            return (
              <div key={i}>
                {item.id}
                {item.titleVid}
                <p
                  onClick={() => {
                    sendToDetailes(item);
                    setShow(true);
                  }}
                >
                  {item.descriptionVid.slice(0, 100)}...
                </p>
                <ReactPlayer controls url={item.video} />
                <button
                  onClick={() => {
                    addMindVideoTask(i);
                  }}
                >
                  start
                </button>
                <video src={item.video} loop typeof="video/mp4"></video>
              </div>
            );
          })
        : ""}
      {/* ------------------------------------------------------------------------- */}
      {bookDatas.map((item, i) => {
        return (
          <div key={i}>
            <div className="book">
              {item.title}
              {item.discreption}
              {item.discreption}
              <img src={item.img} alt="" />
              <p
                onClick={() => {
                  sendToDetailes(item);
                  setShow(true);
                }}
              >
                {item.discreption.slice(0, 100)}...
              </p>
              <button
                onClick={() => {
                  addBookTask(i);
                }}
              >
                add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Mind;
