import React from 'react';
import { Route } from 'react-router-dom';
import FolderList from '../FolderList';
import NoteList from '../NoteList';


export default function FolderRoute() {
    return (
      <>
      <Route exact path="/folder" component={FolderList} />
      <Route exact path="/folder" component={NoteList} />
      </>
    )
  }