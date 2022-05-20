import React from 'react';

export default function TaskCardVisual ({task, tEdit}) {

  return (
    <div>
     <h3>{task.title}</h3>
     <p>{task.description}</p>
     <p>{task.status}</p>
     
     <button type="button" onClick={tEdit}>Editar</button>
    </div>
  )
}