import React from "react";
import "./Note.css";
const Note = (props) => {
  const onDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <footer onClick={onDelete}>Delete</footer>
    </div>
  );
};
export default Note;
