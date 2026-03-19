import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext.js';
import NotesItem from './NotesItem.js';
import AddNotes from './AddNotes.js';


const Notes = () => {
    const  context = useContext(NoteContext);
    const {notes,addNote} = context;

  return (
    <>
        <AddNotes/>
        <div className='row my-3'>
              {notes.map((note)=>{
            
              return <NotesItem key={note._id} note={note}/>
                })}
        </div>
    </>
  )
}

export default Notes
