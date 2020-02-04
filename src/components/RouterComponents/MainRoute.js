import React from 'react';
import { Route } from 'react-router-dom';
import FolderList from '../FolderList';
import NoteList from '../NoteList';


export default function MainRoute(props) {
    return (
      <>
        <Route
        exact
        path="/"
        render={() => <FolderList folders={props.folders} />}
      />
        <Route
        exact
        path="/"
        render={() => <NoteList notes={props.notes} />}
      />
      </>
    )
  }
