import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

// Define a functional component named CreateNote
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Handle input changes for title and content
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  // Add the note and reset the input fields
  const handleAddNote = () => {
    if (note.title || note.content) {
      props.passNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  // Expand the form on clicking the textarea
  const handleExpand = () => {
    setExpand(true);
  };

  // Collapse the form on double-clicking the container
  const handleCollapse = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={handleCollapse}>
        <form>
          {/* Input field for the title */}
          {expand && (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={handleInputChange}
              placeholder="Write a heading"
              autoComplete="off"
              className="inputsdata"
            />
          )}

          {/* Textarea for writing the note */}
          <textarea
            name="content"
            value={note.content}
            onChange={handleInputChange}
            placeholder="Write a note..."
            onClick={handleExpand}
            className="abs"
          ></textarea>

          {/* Button for adding the note */}
          {expand && (
            <Button onClick={handleAddNote}>
              <AddIcon className="plus_sign" />
            </Button>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
