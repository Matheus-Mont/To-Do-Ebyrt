import React, { useState, useEffect } from 'react';
import { updateTasks } from '../services/api';
export default function TaskCardEdit({ task, tEdit, getTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  }, []);

  const handleTitle = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const handleDescription = ({ target }) => {
    const { value } = target;
    setDescription(value);
  };

  const handleStatus = ({ target }) => {
    const { value } = target;
    setStatus(value);
  };

  const handleClick = async ({ target }) => {
    const { id } = target;
    await updateTasks(`/tasks/${id}`, { title, description, status });
    await getTasks();
    tEdit();
  };
  return (
    <section className="card-desc">
      <div>
        <input className="form-control" value={title} onChange={handleTitle} />
        <textarea
          className="form-control"
          value={description}
          onChange={handleDescription}
        />
        <select className="form-control" value={status} onChange={handleStatus}>
          <option value="em andamento">Em andamento</option>
          <option value="pendente">Pendente</option>
          <option value="pronto">Pronto</option>
        </select>
      </div>
      <button
        id={task.id}
        className="btn btn-success text-center"
        type="button"
        onClick={handleClick}
      >
        Terminar edição
      </button>
    </section>
  );
}
