import React from "react";
import ArticlesList from "../components/ArticlesList";
import BookList from "../components/BooksList";
import { Redirect } from "react-router-dom";

function Home({
  auth,
  bookDatas,
  setBookDatas,
  arcticleData,
  setArcData,
  dataToDtailes,
  setdataToDtailes,
  datafromArcToDtailes,
  setDatafromArcToDtailes,
}) {
  return (
    <div>
      <div>
        <ArticlesList
          dataToDtailes={dataToDtailes}
          setdataToDtailes={setdataToDtailes}
          datafromArcToDtailes={datafromArcToDtailes}
          setDatafromArcToDtailes={setDatafromArcToDtailes}
        />{" "}
      </div>
      <div>
        <BookList
          bookDatas={bookDatas}
          setBookDatas={setBookDatas}
          dataToDtailes={dataToDtailes}
          setdataToDtailes={setdataToDtailes}
        />
      </div>
    </div>
  );
}

export default Home;
