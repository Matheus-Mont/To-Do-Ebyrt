import React, {useState} from 'react';
import { generateNewTasks } from '../services/api';

export default function InputTask ({ isCreate, gTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleTitle = ({target}) => {
    const {value} = target;
    setTitle(value);
  }

  const handleDescription = ({target}) => {
    const {value} = target;
    setDescription(value);
  }

  const createNewTask = async ({target}) => {
    await generateNewTasks('/tasks', {title, description});
    isCreate();
    await gTasks();
  }

  return (
    <article>
     <input value={title} type="text" onChange={handleTitle}/>
     <textarea value={description} type="text" onChange={handleDescription} />
     <button type='button' onClick={createNewTask}> Criar</button>
    </article>
  )
}