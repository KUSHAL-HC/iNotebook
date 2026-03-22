import { useState} from "react";
import NoteContext from "./NoteContext";

const NotesState = (props)=>{
  const  host = "http://localhost:8080";
    const  notesInitial = []
    const [notes , setNotes] = useState(notesInitial)

    const getNotes =async ()=>{

      
      const response = await fetch(`${host}/api/notes/fetchallnotes` ,{
        method:'GET',headers:{
            'Content-Type':'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhYWUyZWM1N2FiMmMwNTU1MDdhOGMyIn0sImlhdCI6MTc3MjgwNzExNX0.vwqY-8_cKeXWB0QdhKzs4RrgVPkS5nlxzaKANTh2vpU'
        }});
        const json =await  response.json();
        console.log(json);
        setNotes(json);
      
    }


    const addNote =async (title,description,tag)=>{

      const response = await fetch(`${host}/api/notes/addnote` ,{
        method:'POST',headers:{
            'Content-Type':'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhYWUyZWM1N2FiMmMwNTU1MDdhOGMyIn0sImlhdCI6MTc3MjgwNzExNX0.vwqY-8_cKeXWB0QdhKzs4RrgVPkS5nlxzaKANTh2vpU'
        },body: JSON.stringify({title,description,tag})});
        
        const json =await  response.json();
        console.log(json);

      const note={
        "_id": "69b052f99ea0bd4fcad8d6829",
        "user": "69aae2ec57ab2c055507a8c2",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2026-03-10T17:20:57.249Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    const deleteNote =async (id)=>{
      
      const newNotes = notes.filter((note)=>{return note._id !== id});
      setNotes(newNotes);
      const response = await fetch(`${host}/api/notes/deletenote/${id}` ,{
        method:'DELETE',headers:{
            'Content-Type':'application/json',
            'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhYWUyZWM1N2FiMmMwNTU1MDdhOGMyIn0sImlhdCI6MTc3MjgwNzExNX0.vwqY-8_cKeXWB0QdhKzs4RrgVPkS5nlxzaKANTh2vpU'
        }});
        const json = await response.json();
        console.log(json);
      }

    const editNote =async (id,title,description,tag)=>{

          const response = await fetch(`${host}/api/notes/updatenote/${id}` ,{
            method:'PUT',headers:{
                'Content-Type':'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjlhYWUyZWM1N2FiMmMwNTU1MDdhOGMyIn0sImlhdCI6MTc3MjgwNzExNX0.vwqY-8_cKeXWB0QdhKzs4RrgVPkS5nlxzaKANTh2vpU'
            },body: JSON.stringify({title,description,tag})});
            const json = await response.json();
            console.log(json);

          
          let newNotes = JSON.parse(JSON.stringify(notes))

          for(let index = 0;index < newNotes.length;index++){
            const element = notes[index];
            if(element._id === id)
            {
              newNotes[index].title = title;
              newNotes[index].description = description;
              newNotes[index].tag = tag;
            break;}
        }setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{notes,setNotes,addNote, deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NotesState;