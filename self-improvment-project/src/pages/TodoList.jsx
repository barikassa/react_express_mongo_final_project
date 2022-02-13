import React from "react";
import ReactPlayer from "react-player";
import { Table } from "react-bootstrap";
import "../css/todoList.css";

function TodoList({ TodoData, setTodoData, ComplitedData, setComplitedData }) {
  //todo=> add --------------------------------------------------------------------------------------------------------
  const addTocomplited = (i) => {
    const copyTodoData = [...TodoData];
    const temp = [...ComplitedData];
    temp.push(copyTodoData[i]);
    setComplitedData(temp);
    copyTodoData.splice(copyTodoData[i], 1);
    setTodoData(copyTodoData);
    console.log(TodoData[i]);
  };
  //todo=> Delete book task --------------------------------------------------------------------------------------------------------
  const deleteBookTask = (i) => {
    const copyTodoData = [...TodoData];
    const temp = [...copyTodoData];
    temp.splice(i, 1);
    setTodoData(temp);
  };

  // -----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>TodoData</th>
          </tr>
        </thead>

        {TodoData
          ? TodoData.map((item, i) => {
              return (
                <div key={i}>
                  {/* mind books---------------------------------------------------------------------------------------- */}
                  <tbody>
                    <tr>
                      <td>
                        <p>{item.title}</p>
                      </td>
                      <td>
                        {" "}
                        <img src={item.img} alt="" />
                      </td>
                      <td>
                        {" "}
                        <p>
                          {item.discreption
                            ? item.discreption.slice(0, 100)
                            : ""}
                          ....
                        </p>
                      </td>
                    </tr>
                  </tbody>
                  {/* <div> */}
                  {/* <p>{item.title}</p> */}
                  {/* <p>
                      <img src={item.img} alt="" />
                    </p> */}
                  {/* <p>
                      {item.discreption ? item.discreption.slice(0, 100) : ""}
                      ....
                    </p> */}
                  {/* </div> */}
                  {/* mind articles---------------------------------------------------------------------------------------- */}
                  <tbody>
                    <tr>
                      <td>
                        <p>{item.titleArc}</p>
                      </td>
                      <td>
                        {" "}
                        <p>
                          <img src={item.imgArc} alt="" />
                        </p>
                      </td>
                      <td>
                        {" "}
                        <p>{item.story ? item.story.slice(0, 100) : ""}</p>
                      </td>
                      <td>
                        <p>{item.story ? item.story.slice(0, 100) : ""}</p>
                      </td>
                    </tr>
                  </tbody>
                  {/* <div> */}
                    {/* <p>{item.titleArc}</p> */}
                    {/* <p>
                      <img src={item.imgArc} alt="" />
                    </p> */}
                    {/* <p>{item.story ? item.story.slice(0, 100) : ""}</p> */}
                  {/* </div> */}
                  {/* mind videos ---------------------------------------------------------------- */}
                  {/* <div> */}
                    <tbody>
                      <tr>
                        <td>
                          <p>{item.id}</p>
                        </td>
                        <td>
                          <p>{item.titleVid}</p>
                        </td>
                        <td>
                          {" "}
                          <p>
                            {item.descriptionVid
                              ? item.descriptionVid.slice(0, 100)
                              : ""}
                          </p>
                        </td>
                        <td>
                          {" "}
                          <p>
                            <ReactPlayer controls url={item.video} />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    {/* <p>{item.id}</p> */}
                    {/* <p>{item.titleVid}</p> */}
                    {/* <p>
                      {item.descriptionVid
                        ? item.descriptionVid.slice(0, 100)
                        : ""}
                    </p> */}
                    {/* <p>
                      <ReactPlayer controls url={item.video} />
                    </p> */}
                  {/* </div> */}
                  {/* Body yoga---------------------------------------------------------------------------------------- */}
                  {/* <div> */}
                    <tbody>
                      <tr>
                        <td>
                          <p>{item.english_name}</p>
                        </td>
                        <td>
                          <p>{item.sanskrit_name}</p>
                        </td>
                        <td>
                          {" "}
                          <p>
                            <img src={item.img_url} alt="" />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    {/* <p>{item.english_name}</p> */}
                    {/* <p>{item.sanskrit_name}</p> */}
                    {/* <p>
                      <img src={item.img_url} alt="" />
                    </p> */}
                  {/* </div> */}
                  {/* body training---------------------------------------------------------------------- */}
                  <div>
                    <tbody>
                      <tr>
                        <td>
                          <p>{item.sets}</p>
                        </td>
                        <td>
                          <p>{item.titleTrain}</p>
                        </td>
                        <td>
                          <p>
                            {item.descTrn ? item.descTrn.slice(0, 100) : ""}
                          </p>
                        </td>
                        <td>
                          {" "}
                          <p>
                            <ReactPlayer controls url={item.videoTrn} />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    {/* <p>{item.sets}</p> */}
                    {/* <p>{item.titleTrain}</p> */}
                    {/* <p>{item.descTrn ? item.descTrn.slice(0, 100) : ""}</p> */}
                    {/* <p>
                      <ReactPlayer controls url={item.videoTrn} />
                    </p> */}
                    {/* <p>
                      <img src={item.imgTrn} alt="" />
                    </p> */}
                  </div>
                  {/*body diet ------------------------------------------------------------------------------------ */}
                  <div>
                    <tbody>
                      <tr>
                        <td>{item.day ? item.day.slice(0, 100) : ""}</td>
                        <td>
                          {" "}
                          <p>{item.Breakfast_menu}</p>
                        </td>
                        <td>
                          <p>{item.lunch_menu}</p>
                        </td>
                        <td>
                          <p>{item.dinner_menu}</p>
                        </td>
                        <td>
                          {" "}
                          <p>
                            <img src={item.imgDiet} alt="" />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                    {/* {item.day ? item.day.slice(0, 100) : ""}
                    <p>{item.Breakfast_menu}</p>
                    <p>{item.lunch_menu}</p>
                    <p>{item.dinner_menu}</p>
                    <p>
                      <img src={item.imgDiet} alt="" />
                    </p> */}
                  </div>
                  {/* ------------------------------------------------------------------------------------ */}
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            addTocomplited(i);
                          }}
                        >
                          Complited
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          onClick={() => {
                            deleteBookTask(i);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  {/* <button
                    onClick={() => {
                      addTocomplited(i);
                    }}
                  >
                    Complited
                  </button> */}
                  {/* <button
                    onClick={() => {
                      deleteBookTask(i);
                    }}
                  >
                    Delete
                  </button> */}
                </div>
              );
            })
          : ""}
      </Table>
    </div>
  );
}

export default TodoList;
