import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskManager = () => {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <TaskForm onSubmitSuccess={() => alert('Task saved')} />
      <select onChange={e => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <TaskList filter={filter} />
    </div>
  );
};

export default TaskManager;
