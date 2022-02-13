import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";

function Detailes({
  mindVideoData,
  mindArticleData,
  setmindArticleData,
  dataToDtailes,
  setdataToDtailes,
  bookDatas,
  datafromArcToDtailes,
  setDatafromArcToDtailes,
}) {
  return (
    <div>
      <div>
        <p>{dataToDtailes.titleArc}</p>
        <p>
          <img src={dataToDtailes.imgArc} alt="" />
        </p>
        <p>{dataToDtailes.story}</p>
      </div>
      {/*mindVideoData----------------------------------------------------------------------------------------------------------------  */}

      <div>
        <p>{dataToDtailes.titleVid}</p>
        <p>{dataToDtailes.descriptionVid}</p>
        <p>
          <ReactPlayer controls url={dataToDtailes.video} />
        </p>
      </div>
      {/*bookDatas----------------------------------------------------------------------------------------------------------------  */}

      <div>
        {dataToDtailes.title}
        {dataToDtailes.discreption}
        <img src={dataToDtailes.img} alt="" />
      </div>

      {/*body training data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sets}
        {dataToDtailes.titleTrain}...
        <ReactPlayer controls url={dataToDtailes.videoTrn} />
        <img src={dataToDtailes.imgTrn} alt="" />
      </div>

      {/*body diet data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sets}
        {dataToDtailes.Breakfast_menu}
        {dataToDtailes.lunch_menu}
        {dataToDtailes.dinner_menu}
        <img src={dataToDtailes.imgDiet} alt="" />
      </div>
      {/*body yoga data----------------------------------------------------------------------------------------------------------------  */}
      <div>
        {dataToDtailes.sanskrit_name}
        {dataToDtailes.english_name}
        <img src={dataToDtailes.img_url} alt="" />
      </div>
      {/*body article from component data----------------------------------------------------------------------------------------------------------------  */}

      <div>
        {datafromArcToDtailes ? datafromArcToDtailes.title : ""}
        {datafromArcToDtailes ? (
          <img src={datafromArcToDtailes.img} alt="" />
        ) : (
          ""
        )}
        <p>{datafromArcToDtailes ? datafromArcToDtailes.discreption : ""}</p>
      </div>
    </div>
  );
}

export default Detailes;
