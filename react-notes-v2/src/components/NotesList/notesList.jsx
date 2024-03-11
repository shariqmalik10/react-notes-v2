import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const NotesList = () => {
  //   let notes_list = ["Hello World", "Hi"];
  const [notes_list, setNotesList] = useState([]);
  //updating the edited note
  const [editedNote, setEditedNote] = useState("");
  //setting the index of selected note for edit
  const [editIndex, setEditIndex] = useState(null);
  //setting new note
  const [newNote, setNewNote] = useState("");

  const handleEdit = (index) => {
    // console.log(notes_list[index]);
    console.log("At handleEdit func wow");
    setEditIndex(index);
    setEditedNote(notes_list[index]);
  };

  const handleSave = (index) => {
    if (editedNote == "") {
      notes_list.splice(index, 1);
    } else {
      notes_list[index] = editedNote;
    }
    setEditedNote("");
    setEditIndex(null);
  };

  const handleNewSave = (e) => {
    console.log("New note save was triggered");
    if (newNote.length > 0) {
      setNotesList([...notes_list, newNote]);
      setNewNote("");
    }
  };

  const handleKeyPress = (e) => {
    // console.log(`Key pressed: ${e.key}, notecontent: ${newNote}`)
    if (e.key === "Enter") {
    //   console.log(newNote);
      handleNewSave();
      e.preventDefault();
    }
  };

  const handleEditKeyPress = (e) => {
    if (e.key === "Enter") {
        // console.log(newNote);
        handleSave(editIndex);
        e.preventDefault();
    }
  }

  const handleDelete = (index) => {
    const updatedNotes = notes_list.filter((_, i) => i !== index);
    setNotesList(updatedNotes);
  };

  return (
    <>
      <div className="flex justify-center items-left flex-col p-4">
        <ul className="text-left">
          {notes_list.map((note, index) => (
            <div className="flex flex-row">
              <li
                className="hover:underline text-2xl mt-3 text-slate-200 container flex overflow-hidden whitespace-nowrap"
                key={index}
                onClick={() => handleEdit(index)}
              >
                {/* // display the edit if the edit index is selected oterwise display note */}

                {editIndex === index ? (
                  <input
                    className="bg-transparent w-full mr-3 
                        leading-tight focus:outline-none text-2xl border-b-2"
                    type="text"
                    value={editedNote}
                    onChange={(e) => setEditedNote(e.target.value)}
                    onBlur={() => handleSave(index)}
                    onKeyDown={handleEditKeyPress}
                  />
                ) : (
                  note
                )}
              </li>

              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 ml-2"
              >
                <MdDelete className="h-8 w-8" />
              </button>
            </div>
          ))}
        </ul>
        <input
          type="text"
          className="bg-transparent border-b-2 w-full mr-3 py-1 
          leading-tight focus:outline-none text-2xl text-slate-200 mt-3"
          value={newNote}
          placeholder="Type here to begin a new note"
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={handleKeyPress}
          //   onBlur={() => handleNewSave()}
        />
      </div>
    </>
  );
};

export default NotesList;
