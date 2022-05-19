import { useState, useEffect } from 'react';
import InputTask from './components/InputTask';
import TasksList from './components/TasksList';
function App() {
  return (
    <div>
      <header>
        <h1>Lista de tarefas Ebytr</h1>
      </header>
      <main>
        <InputTask />
        <TasksList />
      </main>
    </div>
  );
}

export default App;
