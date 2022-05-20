import React, { useState } from 'react';
import { deleteTasks } from '../services/api';
import TaskCardEdit from './TaskCardEdit';
import TaskCardVisual from './TaskCardVisual';

export default function TaskCard({ task, getTasks }) {
  const [edit, setEdit] = useState(false);

  const handleClick = async ({ target }) => {
    const { id } = target;
    await deleteTasks(`/tasks/${id}`);
    await getTasks();
    setEdit(false);
  };

  return (
    <section className="task-card m-2 card bg-light">
      {!edit ? (
        <TaskCardVisual task={task} tEdit={() => setEdit(!edit)} />
      ) : (
        <TaskCardEdit
          task={task}
          tEdit={() => setEdit(!edit)}
          getTasks={getTasks}
        />
      )}
      <button
        className="btn btn-danger"
        id={task.id}
        type="button"
        onClick={handleClick}
      >
        Deletar tarefa
      </button>
    </section>
  );
}
