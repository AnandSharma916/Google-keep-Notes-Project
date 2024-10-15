import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  // Function to add a note
  const addNote = (note) => {
    alert("I am clicked");
    setAddItem((oldData) => {
      return [...oldData, note];
    });
    console.log(note);
  };

  // Function to delete a note
  const onDelete = (id) => {
    setAddItem((oldData) =>
      oldData.filter((currData, index) => {
        return index!== id; // Fixed typo (!= to !==)
      })
    );
  };

  return (
    <>
      <Header />
      {/* Pass the addNote function as a prop to CreateNote component */}
      <CreateNote passNote={addNote} />
      {/* Map through the added items and render the Note component for each */}
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content} // Corrected typo here
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
