import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
// Define a functional component named CreateNote
const CreateNote = (props) => {
  const[expand,setExpand]=useState(false);
  const[note,setNote]=useState({
    title:"",
    content:"",
  });
  const InputEvent=(event)=>{
// const value=event.target.value;
// const name=event.target.name;
const {name,value}=event.target;
    setNote((prevData)=>{
      return{
        ...prevData,
        [name]:value,
    };
    });
    console.log(note);
  };

  const addEvent=()=>{
    props.passNote(note);
    setNote({
      title:"",
      content:"",
    })
  };

  const expandIt=()=>{
    setExpand(true);
  };
  const btoNormal=()=>{
    setExpand(false);
  };
  return (
    <>
      <div className="main_note"   onDoubleClick={btoNormal}>
        <form>
          {/* Input field for the title */}
         { expand?
          <input type="text" 
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title" 
          autoComplete="off"
          />:null}
          {/* Textarea for writing the note */}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="write a note ...."
            onClick={expandIt}
          
          ></textarea>
          {expand ?
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>:null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
