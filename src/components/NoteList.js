import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export default function NoteList(props) {
  return (
    <div className="noteList">
      <ul>
        <Note />
      </ul>
    <AddNote />
    </div>
  );
}

