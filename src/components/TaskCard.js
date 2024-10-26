import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskState } from '../features/tasks/taskSlice';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <img src={task.image} alt={task.title} />
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>State: {task.state}</p>
      <button onClick={() => dispatch(updateTaskState({ id: task.id, state: 'done' }))}>Mark as Done</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskCard;
