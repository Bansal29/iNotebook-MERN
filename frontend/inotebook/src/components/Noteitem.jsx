import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <FontAwesomeIcon
            className="icon mx-2"
            icon={faTrash}
            onClick={() => deleteNote(note._id)}
          />
          <FontAwesomeIcon
            className="icon mx-2"
            icon={faPenToSquare}
            onClick={() => {
              updateNote(note);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
