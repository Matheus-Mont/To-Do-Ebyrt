import React from 'react';
import TaskCard from './TaskCard';

export default function TasksList ({tasks, getTasks}) {
  return (
    <article>
      {tasks.map((e, i) => <TaskCard key={i} task={e} getTasks={getTasks} /> )}
    </article>
  )
}