import { Form, Button } from "react-bootstrap";
import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { FcLike, FcDeleteRow } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { BsPencilFill } from "react-icons/bs";
import "../css/forum.css";

function Forum(email, setEmail) {
  const [participantName, setParticipantName] = useState("");
  const [participantEmail, setParticipantEmail] = useState("");
  const [participantcomment, setParticipantcomment] = useState("");
  const [forumListfromMongo, setForumListfromMongo] = useState([]);
  const [participantLikeMongo, setParticipantLikeMongo] = useState("rtrtrtrt");
  const inputref = useRef();
  //   -------------------------------------------------------------------
  const [counter, setCounter] = useState(null);
  const [update, setUpdate] = useState(false);
  const [updateState, setUpdateState] = useState([]);

  useEffect(getForumList, []);
  function postToDataBase() {
    const url = "/forum";
    const newPost = {
      participantName: participantName,
      participantEmail: email.email,
      participantcomment: participantcomment,
    };
    axios
      .post(url, newPost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    const copyFormState = [...forumListfromMongo];
    copyFormState.push(newPost);
    setForumListfromMongo(copyFormState);
  }
  console.log(forumListfromMongo);

  // todo delete forum-----------------------------------------------------------------------------------------------------------------------------------------
  function deleteforumList(item) {
    const url = `/forum/${item._id}`;
    axios
      .delete(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // todo update forum-----------------------------------------------------------------------------------------------------------------------------------------

  function updateforumList(item, i) {
    const url = `/forum/${item._id}`;
    axios
      .patch(url, { participantcomment: inputref.current.value })
      .then(function (response) {
        console.log(response);
        // console.log("1");
      })
      .catch(function (error) {
        console.log(error);
      });

    const copyFormState = [...forumListfromMongo];
    // console.log(copyFormState[i].participantcomment);
    copyFormState[i].participantcomment = inputref.current.value;
    setForumListfromMongo(copyFormState);
  }
  //todo get forum list--------------------------------------------------------------------------------------------------------------------------------------------------------
  function getForumList() {
    const url = "/forum";
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        setForumListfromMongo(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  // todo post Like ---------------------------------------------------------------------------------------------------------------------------------------
  function postToLikeList(i) {
    const url = "/like";
    console.log("pppppppppppppppppppppppp");
    axios
      .post(url, {
        like: participantLikeMongo,
      })
      .then(function (response) {
        console.log(response);
        setParticipantLikeMongo(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // todo counter fro the like------------------------------------------------------------------------------------------------------------------------------------
  function counterNum() {
    setCounter(counter + 1);
    console.log(counter);
  }
  // -------------------------------------------------------------------------------------
  const imgSrcMail =
    "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731__340.png";
  const imgSrcLike =
    "https://cdn.pixabay.com/photo/2016/06/13/15/02/wolf-1454397__340.png";
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          postToDataBase();
        }}
      >
        <div>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            style={{ width: "160px" }}
          >
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              onChange={(e) => setParticipantName(e.target.value)}
            />
          </Form.Group>{" "}
        </div>
        <div>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
            style={{ width: "560px" }}
          >
            <Form.Label>comment</Form.Label>
            <Form.Control
              ref={inputref}
              as="textarea"
              rows={3}
              onBlur={(e) => setParticipantcomment(e.target.value)}
            />
            <Button type="submit" style={{ width: "100%" }}>
              post
            </Button>
          </Form.Group>
        </div>
      </Form>
      <div>
        {forumListfromMongo
          ? forumListfromMongo.map((item, i) => {
              return (
                <div key={i} className="forumHandler">
                  <div className="comments">
                    <p>{item.participantName}</p>:
                    <p className="commentsP">{item.participantcomment}</p>
                  </div>
                  <div className="clicks">
                    <img src={imgSrcMail} style={{ width: "40px" }} />
                    {counter}
                    <img
                      src={imgSrcLike}
                      style={{ width: "40px" }}
                      onClick={() => {
                        postToLikeList(i);
                        counterNum();
                      }}
                    />
                    <p
                      onClick={() => {
                        console.log("delete");
                        deleteforumList(item);
                        console.log(item);
                      }}
                    >
                      <FcDeleteRow />
                    </p>
                    <p
                      onClick={() => {
                        console.log(item);
                        updateforumList(item, i);
                      }}
                    >
                      <GrUpdate />
                    </p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Forum;
