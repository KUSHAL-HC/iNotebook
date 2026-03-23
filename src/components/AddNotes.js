import React, { useContext,useState } from 'react';
import NoteContext from '../context/notes/NoteContext.js';

const AddNotes = () => {
    const  context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title ,note.description , note.tag);
        setNote({title:"",description:"",tag:""});
    }
    const onChange =(e)=>{
            setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
        <h4>Add a Note</h4>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control  w-50" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control  w-50" name="description" value={note.description} onChange={onChange} minLength={5} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control  w-50" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            <h6>Your Notes</h6>
        </div>
  )
}

export default AddNotes
