import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext.js';
import NotesItem from './NotesItem.js';


const Notes = () => {
    const  context = useContext(NoteContext);
    const {notes,setNotes} = context;

  return (
    <div className='row my-3'>
           {notes.map((note)=>{
         
          return <NotesItem note={note}/>
            })}
    </div>
  )
}

export default Notes
