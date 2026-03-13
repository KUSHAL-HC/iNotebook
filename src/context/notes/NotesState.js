import NoteContext from "./NoteContext";

const NotesState = (props)=>{
    const state = {
        "name":"Harry",
        "class":"10B"
    }
    returm (
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NotesState;