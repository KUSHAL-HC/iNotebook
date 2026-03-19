import React, { useContext,useState } from 'react';
import NoteContext from '../context/notes/NoteContext.js';

const AddNotes = () => {
    const  context = useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"})

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(note.title ,note.description , note.tag);
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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control  w-50" id="title" name="title"  onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control  w-50" name="description"  onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
            <h6>Your Notes</h6>
        </div>
  )
}

export default AddNotes
