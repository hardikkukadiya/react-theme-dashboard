import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: false },
    { id: 3, text: "Read a book", completed: false },
    { id: 4, text: "Finish homework", completed: false },
  ]);
  const [input, setInput] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
      setOpen(false);
    }
  };

  const updateTask = () => {
    if (input.trim() && editingTaskId) {
      setTasks(tasks.map(task =>
        task.id === editingTaskId ? { ...task, text: input } : task
      ));
      setInput('');
      setEditingTaskId(null);
      setOpen(false);
    }
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      setTasks(tasks.filter(task => task.id !== taskToDelete));
      setTaskToDelete(null);
      setConfirmOpen(false);
    }
  };

  const requestDelete = (id) => {
    setTaskToDelete(id); // Set the task to be deleted
    setConfirmOpen(true); // Open confirmation dialog
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setInput(task.text);
    setEditingTaskId(task.id);
    setOpen(true);
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
            onClick={() => setOpen(true)}
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
                  onClick={() => requestDelete(task.id)}
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
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
            <h3 class Name="text-lg font-semibold text-gray-800 mb-4">
              {editingTaskId ? "Edit Todo" : "Add Todo"}
            </h3>
            <textarea
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
              rows="4"
              placeholder="Enter todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {editingTaskId ? "Update Todo" : "Add Todo"}
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 sm:w-96 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600">
              Are you sure you want to delete this task? This action cannot be
              undone.
            </p>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;