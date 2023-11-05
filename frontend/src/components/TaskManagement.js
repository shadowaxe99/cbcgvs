```javascript
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../redux/actions';
import { api } from '../utils/api';

const TaskManagement = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    dispatch(actions.fetchTasks());
  }, [dispatch]);

  const handleTaskInput = event => {
    setNewTask(event.target.value);
  };

  const handleTaskSubmit = event => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      dispatch(actions.addTask(newTask));
      setNewTask('');
    }
  };

  const handleTaskDelegation = (taskId, aiAgentId) => {
    api.delegateTask(taskId, aiAgentId)
      .then(response => {
        if (response.status === 200) {
          dispatch(actions.updateTask(taskId, { delegatedTo: aiAgentId }));
        }
      })
      .catch(error => {
        console.error('Error delegating task:', error);
      });
  };

  return (
    <div id="taskManagement">
      <h2>Task Management</h2>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskInput}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <p>{task.description}</p>
            <button onClick={() => handleTaskDelegation(task.id, task.aiAgentId)}>
              Delegate to AI Agent
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
```