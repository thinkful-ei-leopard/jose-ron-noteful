import React from 'react'
import Folder from './Folder';
import AddFolder from './AddFolder';

function FolderList(props) {
  return (
    <div className="folderList">
      <ul>
        <Folder />
      </ul>
      <AddFolder />
    </div>
  )
}

export default FolderList
