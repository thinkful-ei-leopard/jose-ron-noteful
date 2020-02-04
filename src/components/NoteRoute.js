import React from 'react';
import Note from './Note';


export default function NoteRoute(props) {
    return (
        <>
        <Note />
        <p> Note content goes here.</p>
        <div>
            <button>Go Back</button>
        </div>
        <p>You're in Folder 3</p>
        </>
    )
}
