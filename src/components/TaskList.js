import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';

const TaskList = ({ filter }) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const filteredTasks = filter ? tasks.filter(task => task.state === filter) : tasks;
  
  return (
    <div>
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
