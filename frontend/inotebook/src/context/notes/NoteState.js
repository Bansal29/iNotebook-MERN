import { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://i-notebook-mern-xi.vercel.app";

  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([notes]);

  // useEffect(() => {
  //   setFilteredNotes(notes); // Initialize filteredNotes when notes change
  // }, [notes]);

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setNotes([...notes, note]); // Add new note to notes array
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
      setFilteredNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
      setFilteredNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const editNote = async (id, title, desc, tag) => {
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, desc, tag }),
      });
      const newNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description: desc, tag } : note
      );
      setNotes(newNotes);
      setFilteredNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const searchNotes = (query) => {
    if (!query) {
      setFilteredNotes(notes); // Reset to all notes when query is empty
    } else {
      const filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredNotes(filtered);
    }
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        filteredNotes,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        searchNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
