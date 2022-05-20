import { useState, useEffect } from 'react';
import InputTask from './components/InputTask';
import OrderTasks from './components/OrderTasks';
import TasksList from './components/TasksList';
import generateTasks from './services/api';

function App() {
  const[dados, setDados] = useState([]);
  const [list, setList] = useState([]);
  const[isCreate, setIsCreate] = useState(true);

  useEffect(() => {
    getTasks();    
  }, []);

  const getTasks = async () => {
    const {data} = await generateTasks('/tasks');
    setDados(data);
    setList(data);
    console.log('teste')
  }

  const newTask = () => {
    setIsCreate(!isCreate)
  }

  return (
    <div>
      <header>
        <h1>Lista de tarefas Ebytr</h1>
      </header>
      <main>
        <OrderTasks list={list} changeList={(v) => setList(v)} getTasks={getTasks} dados={dados} />
        <TasksList tasks={list} getTasks={getTasks}/>

        {isCreate ? (
        <button type='button' onClick={newTask}> Criar nova tarefa </button>
        ) : <InputTask isCreate={ newTask } gTasks={getTasks}/> }

      </main>
    </div>
  );
}

export default App;
