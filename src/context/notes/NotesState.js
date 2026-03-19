import { useState} from "react";
import NoteContext from "./NoteContext";

const NotesState = (props)=>{
    const  notesInitial = [
        {
          "_id": "69b052f99ea0bd4fcad8d682",
          "user": "69aae2ec57ab2c055507a8c2",
          "title": "new note 4",
          "description": "Play less games 4",
          "tag": "youtube 2 updated 4",
          "date": "2026-03-10T17:20:57.249Z",
          "__v": 0
        },
        {
          "_id": "69b81703549f1ccf47107114",
          "user": "69aae2ec57ab2c055507a8c2",
          "title": "new note 5",
          "description": "Play less games 5",
          "tag": "youtube 2 updated 5",
          "date": "2026-03-16T14:43:15.348Z",
          "__v": 0
        },{
            "_id": "69b81703549f1ccf471071142",
            "user": "69aae2ec57ab2c055507a8c2",
            "title": "new note 5",
            "description": "Play less games 5",
            "tag": "youtube 2 updated 5",
            "date": "2026-03-16T14:43:15.348Z",
            "__v": 0
          },{
            "_id": "69b81703549f1ccf471071143",
            "user": "69aae2ec57ab2c055507a8c2",
            "title": "new note 5",
            "description": "Play less games 5",
            "tag": "youtube 2 updated 5",
            "date": "2026-03-16T14:43:15.348Z",
            "__v": 0
          },{
            "_id": "69b81703549f1ccf471071144",
            "user": "69aae2ec57ab2c055507a8c2",
            "title": "new note 5",
            "description": "Play less games 5",
            "tag": "youtube 2 updated 5",
            "date": "2026-03-16T14:43:15.348Z",
            "__v": 0
          },{
            "_id": "69b81703549f1ccf471071145",
            "user": "69aae2ec57ab2c055507a8c2",
            "title": "new note 5",
            "description": "Play less games 5",
            "tag": "youtube 2 updated 5",
            "date": "2026-03-16T14:43:15.348Z",
            "__v": 0
          },{
            "_id": "69b81703549f1ccf471071146",
            "user": "69aae2ec57ab2c055507a8c2",
            "title": "new note 5",
            "description": "Play less games 5",
            "tag": "youtube 2 updated 5",
            "date": "2026-03-16T14:43:15.348Z",
            "__v": 0
          }
      ]
      const [notes , setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NotesState;