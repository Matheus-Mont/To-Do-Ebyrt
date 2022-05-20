import React, { useState } from 'react';
import { generateNewTasks } from '../services/api';

export default function InputTask({ isCreate, gTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitle = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  const handleDescription = ({ target }) => {
    const { value } = target;
    setDescription(value);
  };

  const createNewTask = async ({ target }) => {
    await generateNewTasks('/tasks', { title, description });
    isCreate();
    await gTasks();
  };

  return (
    <article>
      <input
        className="form-control"
        placeholder="Título"
        value={title}
        type="text"
        onChange={handleTitle}
      />
      <textarea
        className="form-control"
        placeholder="Descrição"
        value={description}
        type="text"
        onChange={handleDescription}
      />
      <button type="button" className="btn btn-success" onClick={createNewTask}>
        {' '}
        Criar
      </button>
      <button type="button" className="btn btn-secondary" onClick={isCreate}>
        {' '}
        Fechar{' '}
      </button>
    </article>
  );
}
