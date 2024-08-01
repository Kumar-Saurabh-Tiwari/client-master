import './App.css';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
const App = () => {
const [tasks, setTasks] = useState([]);
const handleTaskCreated = (task) => {
setTasks([...tasks, task]);
};
return (
<div>
<h1>MERN CRUDTask Manager</h1>
<TaskForm onTaskCreated={handleTaskCreated} />
<TaskList />
</div>
);
};
export default App;