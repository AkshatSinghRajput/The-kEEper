import "./styles.css";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Form from "./Components/Form";
import React, { useState } from "react";
export default function App() {
  const [mainData, dataHandler] = useState([]);
  const dataGetter = (t, b, k) => {
    dataHandler([
      ...mainData,
      {
        title: t,
        body: b,
        id: k
      }
    ]);
  };
  const deleteCarder = (id) => {
    dataHandler((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-lg-3 col-sm-12">
            <Form onGetData={dataGetter} />
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="container ">
              <div className="cards">
                {mainData.map((d, index) => {
                  return (
                    <Note
                      title={d.title}
                      body={d.body}
                      id={index}
                      key={index}
                      onDelete={deleteCarder}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
