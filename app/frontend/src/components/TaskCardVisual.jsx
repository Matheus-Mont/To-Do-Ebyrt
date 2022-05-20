import React from 'react';

export default function TaskCardVisual({ task, tEdit }) {
  return (
    <div className="card-desc card text-bg-info text-center">
      <span className="card-header">{task.status}</span>
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
      </div>
      <button className="btn btn-warning m-0" type="button" onClick={tEdit}>
        Editar
      </button>
    </div>
  );
}
