import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { taskFormSchema } from '../features/tasks/taskFormSchema';

const TaskForm = ({ task, onSubmitSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(taskFormSchema),
    defaultValues: task || { title: '', description: '', priority: 'Low', state: 'todo' },
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (task) {
      dispatch(editTask({ ...data, id: task.id }));
    } else {
      dispatch(addTask({ ...data, id: Date.now() }));
    }
    onSubmitSuccess();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Title" />
      <p className="text-danger">{errors.title?.message}</p>

      <input {...register('description')} placeholder="Description" />
      <p className="text-danger">{errors.description?.message}</p>

      <select {...register('priority')}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <p className="text-danger">{errors.priority?.message}</p>

      <select {...register('state')}>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <p className="text-danger">{errors.state?.message}</p>

      <button type="submit">{task ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
