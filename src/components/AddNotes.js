import React, { useContext,useState } from 'react';
import NoteContext from '../context/notes/NoteContext.js';

const AddNotes = () => {
    const  context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title ,note.description , note.tag);
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
                    <input type="text" className="form-control  w-50" id="title" name="title"  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control  w-50" name="description"  onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control  w-50" id="tag" name="tag"  onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            <h6>Your Notes</h6>
        </div>
  )
}

export default AddNotes
