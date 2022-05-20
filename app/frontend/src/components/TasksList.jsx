import React from 'react';
import TaskCard from './TaskCard';

export default function TasksList({ tasks, getTasks }) {
  return (
    <article className="d-flex justify-content-center flex-wrap">
      {tasks.map((e, i) => (
        <TaskCard key={i} task={e} getTasks={getTasks} />
      ))}
    </article>
  );
}
