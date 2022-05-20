import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import InputTask from './components/InputTask';
import OrderTasks from './components/OrderTasks';
import TasksList from './components/TasksList';
import generateTasks from './services/api';

function App() {
  const [dados, setDados] = useState([]);
  const [list, setList] = useState([]);
  const [isCreate, setIsCreate] = useState(true);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const { data } = await generateTasks('/tasks');
    setDados(data);
    setList(data);
    console.log('teste');
  };

  const newTask = () => {
    setIsCreate(!isCreate);
  };

  return (
    <div className="m-0">
      <header className="text-white text-center">
        <h1 className="m-0 pt-3 pb-3 bg-dark">Lista de tarefas Ebytr</h1>
      </header>
      <main className="mb-4">
        <div className="flex-column justify-content-center p-3">
          <div className="p-0 m-0">
            <header className="d-flex justify-content-center text-center">
              <OrderTasks
                list={list}
                changeList={(v) => setList(v)}
                getTasks={getTasks}
                dados={dados}
              />
            </header>
          </div>
        </div>

        <div className="flex-column ">
          <div className="d-flex justify-content-center">
            {isCreate ? (
              <button
                type="button"
                className="btn btn-primary "
                onClick={newTask}
              >
                {' '}
                Criar nova tarefa{' '}
              </button>
            ) : (
              <InputTask isCreate={newTask} gTasks={getTasks} />
            )}
          </div>
          <div>
            <TasksList tasks={list} getTasks={getTasks} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
