import React from 'react';

// object.assign folder with corresponding id and note
//find by id function

export default function Folder(props) {
    return (
        <>
            <li>{props.folder.name}</li>
        </>
    )
}
