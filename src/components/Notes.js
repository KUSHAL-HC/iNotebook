import React, { useContext, useEffect,useRef ,useState} from 'react';
import NoteContext from '../context/notes/NoteContext.js';
import NotesItem from './NotesItem.js';
import AddNotes from './AddNotes.js';


const Notes = () => {
    const  context = useContext(NoteContext);
    const {notes,getNotes} = context;
    useEffect(()=>{
      getNotes()
    },[])

    const updateNote =(currentNote)=>{
       ref.current.click();
       setNote({etitle:currentNote.title,edescription: currentNote.description,etag: currentNote.tag});
    }
    const ref = useRef(null);

    const [note, setNote] = useState({etitle:"",edescription:"",etag:"default"})

    const handleClick = (e)=>{
      console.log("updating", note)
      e.preventDefault();
    }
  const onChange =(e)=>{
          setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <>
        <AddNotes/>
        <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  <form>
                      <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label" >Title</label>
                          <input type="text" className="form-control  w-50" id="etitle" name="etitle" value={note.etitle} onChange={onChange}/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="description" className="form-label">Description</label>
                          <input type="text" className="form-control  w-50" name="edescription" value={note.edescription} onChange={onChange}/>
                      </div>

                      <div className="mb-3">
                          <label htmlFor="tag" className="form-label">Tag</label>
                          <input type="text" className="form-control  w-50" id="etag" name="etag" value={note.etag} onChange={onChange}/>
                      </div>
                      
                  </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-3'>
              {notes.map((note)=>{
            
              return <NotesItem key={note._id} updateNote={updateNote} note={note}/>
                })}
        </div>
    </>
  )
}

export default Notes
