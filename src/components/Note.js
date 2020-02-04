import React from 'react'

function Note(props) {
  console.log(props.notes)
const note = props.notes.map(element => 
<li key={element.id}>{element.name}
<p>{element.content}</p>
<p>{element.modified}</p></li>)
  return (
    <div className="noteElement">
      {note}
    </div>
  )
}

export default Note
