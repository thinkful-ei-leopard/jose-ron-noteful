import React from 'react';
import Note from './Note';


export default function NoteRoute(props) {
    console.log(props.notes)
    // const note = props.notes.map(element => <p>{element.name}</p>)
    return (
        <>
        {/* <p>{note}</p> */}
        <div>
            <button>Go Back</button>
        </div>
        <p>You're in Folder 3</p>
        <Note notes={props.notes}/>
        </>
    )
}
