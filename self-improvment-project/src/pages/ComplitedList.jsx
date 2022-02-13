import React from "react";
import ReactPlayer from "react-player";

function ComplitedList({ ComplitedData, setComplitedData }) {
  //todo=> Delete --------------------------------------------------------------------------------------------------------
  const deleteTask = (i) => {
    const copyTodoData = [...ComplitedData];
    const temp = [...copyTodoData];
    temp.splice(i, 1);
    setComplitedData(temp);
  };
  // ------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      {ComplitedData.map((item, i) => {
        return (
          <div key={i}>
            {item.title ? item.title.slice(0, 100) : ""}
            <img src={item.img} alt="" />
            {item.discreption}
            {/* Body yoga---------------------------------------------------------------------------------------- */}
            {item.english_name}
            {item.sanskrit_name}
            <img src={item.img_url} alt="" />
            {/* mind articles---------------------------------------------------------------------------------------- */}
            {item.titleArc}
            <img src={item.imgArc} alt="" />
            {item.story ? item.story.slice(0, 100) : ""}
            {/* mind videos ----------------------------------------------------------------------------------*/}
            {item.id}
            {item.titleVid}
            {item.descriptionVid ? item.descriptionVid.slice(0, 100) : ""}
            <ReactPlayer controls url={item.video} />
            {/*body training ----------------------------------------------------------------------------------------------------------- */}
            {/* body training---------------------------------------------------------------------- */}
            {item.sets}
            {item.titleTrain}
            {item.descTrn ? item.descTrn.slice(0, 100) : ""}
            <ReactPlayer controls url={item.videoTrn} />
            <img src={item.imgTrn} alt="" />
            {/*body diet ------------------------------------------------------------------------------------ */}
            Day{item.day ? item.day.slice(0, 100) : ""}
            {item.Breakfast_menu}
            {item.lunch_menu}
            {item.dinner_menu}
            <img src={item.imgDiet} alt="" />
            {/* ------------------------------------------------------------------------------------ */}
            <button
              onClick={() => {
                deleteTask(i);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ComplitedList;
