import React from 'react';
import Folder from './Folder';
import AddFolder from './AddFolder';

function FolderList(props) {
  const folders = props.folders.map(folder => (
    <Folder folder={folder} name={folder.name} id={folder.name}>${folder.name}</Folder>
  ));

  return (
    <div className="folderList">
      <ul>
        {folders}
         </ul>
    </div>
  );
}

export default FolderList;
