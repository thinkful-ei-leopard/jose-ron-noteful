import React from 'react'
import Folder from './Folder';
import AddFolder from './AddFolder';

function FolderList(props) {
  return (
    <div>
      <h2>Folders</h2>
      <ul>
        <Folder />
      </ul>
      <AddFolder />
    </div>
  )
}

export default FolderList
