import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext.js';

const NotesItem = (props) => {
    const context = useContext(NoteContext);
    const {deleteNote} = context;

    const {note,updateNote} = props;
  return (
        <div className="col-md-3">
                <div className="card my-3" style={{padding:"10px"}}>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <div className="d-flex gap-3">
                      <button className="btn p-0 border-0 bg-transparent" onClick={() => deleteNote(note._id)}>
                        <i className="fa-regular fa-trash-can"></i>
                      </button>
                    
                      <button className="btn p-0 border-0 bg-transparent" onClick={() =>{updateNote(note)}}>
                          <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </div>
                </div>
        </div>
  )
}

export default NotesItem
