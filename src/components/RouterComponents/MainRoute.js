import React from 'react';
import { Route } from 'react-router-dom';
import FolderList from '../FolderList';
import NoteList from '../NoteList';


export default function MainRoute(props) {
    return (
      <>
      <Route exact path="/" component={FolderList} />
      <Route exact path="/" component={NoteList} />
      </>
    )
  }
