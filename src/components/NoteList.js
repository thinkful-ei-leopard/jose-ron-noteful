import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

export default function NoteList(props) {
  return (
    <div>
        <h2>Notes</h2>
      <ul>
        <Note />
      </ul>
    <AddNote />
    </div>
  );
}

