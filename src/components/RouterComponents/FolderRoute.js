import React from 'react';
import { Route } from 'react-router-dom';
import FolderList from '../FolderList';
import NoteList from '../NoteList';

function FolderRoute(props) {
  return (
    <>
      <Route
        exact
        path="/folder"
        render={() => <FolderList folders={props.folders} />}
      />
      <Route exact path="/folder" component={NoteList} />
    </>
  );
}

export default FolderRoute
