import React from 'react'

const NotesItem = (props) => {
    const {note} = props;
  return (
        <div className="col-md-3">
                <div className="card my-3" style={{padding:"10px"}}>
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <div className="d-flex gap-3">
                      <i className="fa-regular fa-trash-can"></i>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
        </div>
  )
}

export default NotesItem
