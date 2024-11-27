import {  Dialog, DialogBody, DialogFooter, DialogHeader, Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [open, setOpen] = useState(false); // State to control dialog visibility

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
      setOpen(false); // Close dialog after adding the task
    }
  };

  const updateTask = () => {
    if (input.trim() && editingTaskId) {
      setTasks(tasks.map(task =>
        task.id === editingTaskId ? { ...task, text: input } : task
      ));
      setInput('');
      setEditingTaskId(null);
      setOpen(false); // Close dialog after updating the task
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setInput(task.text);
    setEditingTaskId(task.id);
    setOpen(true); // Open the dialog for editing
  };

  const handleSubmit = () => {
    if (editingTaskId) {
      updateTask();
    } else {
      addTask();
    }
  };

  return (
    <div className='mt-5'>
      <div className="px-5 py-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">To Do List</h1>
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 text-white rounded-md w-28 py-1"
            onClick={() => setOpen(true)} // Open the pop-up to add a new todo
          >
            Add todo
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="flex items-start justify-between p-2 border border-gray-200 rounded-md">
              <div className="flex items-start mt-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="mr-2 mt-1.5"
                />
                <span className={`text-gray-800 break-all ${task.completed ? 'line-through' : ''}`} style={{ whiteSpace: 'pre-wrap' }}>
                  {task.text}
                </span>
              </div>
              <div className='flex'>
                <button
                  onClick={() => startEditing(task)}
                  className="bg-blue-500 text-white rounded-md px-2 py-1 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTask(task.id)}
                  className="bg-red-500 text-white rounded-md px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Dialog for adding/editing tasks */}
      <Dialog open={open} handler={() => setOpen(!open)}>
        <DialogHeader>{editingTaskId ? 'Edit Todo' : 'Add Todo'}</DialogHeader>
        <DialogBody>
          <textarea
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
            rows="4" // Make it a multiline input
            placeholder="Enter todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setOpen(false)}
            className="mr-1"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="blue"
            onClick={handleSubmit}
          >
            {editingTaskId ? 'Update todo' : 'Add todo'}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default TodoList;
