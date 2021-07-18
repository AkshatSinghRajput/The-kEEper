import React, { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [title, titleFunc] = useState("");
  const [body, bodyFunc] = useState("");
  const titleHandler = (event) => {
    titleFunc(event.target.value);
  };
  const bodyHandler = (event) => {
    bodyFunc(event.target.value);
  };
  const formHandler = (event) => {
    const d = new Date().getTime();
    event.preventDefault();
    props.onGetData(title, body, d);
    titleFunc("");
    bodyFunc("");
  };
  return (
    <div className="container-fluid">
      <form onSubmit={formHandler}>
        <input
          type="text"
          placeholder="Title"
          onChange={titleHandler}
          value={title}
          required
        />
        <textarea
          name=""
          placeholder="Content"
          id=""
          rows="3"
          onChange={bodyHandler}
          value={body}
          required
        ></textarea>
        <button>➕</button>
      </form>
    </div>
  );
};
export default Form;
