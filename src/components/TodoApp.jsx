import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TodoApp({ mode = 'light' }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const darkGradientBackground = 'linear-gradient(135deg, #1b1446, #2a1b6d)';

  const containerStyle = {
    background: mode === 'light' ? '#f8f9fa' : darkGradientBackground,
    color: mode === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '30px 20px',
    fontFamily: `'Segoe UI', sans-serif`,
    transition: 'all 0.5s ease',
  };

  const inputStyle = {
    flex: 1,
    padding: '12px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
    backgroundColor: mode === 'light' ? '#fff' : '#443c69',
    color: mode === 'light' ? '#000' : '#fff',
    borderColor: mode === 'light' ? '#ced4da' : '#666',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '0 5px',
  };

  const iconButtonStyle = {
    border: 'none',
    background: 'transparent',
    fontSize: '1.3em',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  useEffect(() => {
    const stored = localStorage.getItem('tasks');
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: input, done: false, priority: false },
      ]);
      setInput('');
      toast.success('Task added!');
    } else {
      toast.warn('Please enter a task');
    }
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        toast.info(`Task marked ${t.done ? 'incomplete' : 'complete'}`);
        return { ...t, done: !t.done };
      }
      return t;
    }));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    toast.error('Task deleted');
  };

  const togglePriority = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        toast.info(t.priority ? 'Removed from important' : 'Marked as important');
        return { ...t, priority: !t.priority };
      }
      return t;
    }));
  };

  const clearCompleted = () => {
    const completedCount = tasks.filter(t => t.done && !t.priority).length;
    if (completedCount === 0) {
      toast.info('No completed tasks to remove');
      return;
    }
    setTasks(tasks.filter(t => !t.done || t.priority));
    toast.success(`Removed ${completedCount} completed task${completedCount > 1 ? 's' : ''}`);
  };

  const clearAll = () => {
    const nonImportantCount = tasks.filter(t => !t.priority).length;
    if (nonImportantCount === 0) {
      toast.info('No non-important tasks to clear');
      return;
    }
    // Using toast to confirm action with a simple confirm-like toast button:
    if (window.confirm('Clear all non-important tasks?')) {
      setTasks(tasks.filter(t => t.priority));
      toast.success(`Cleared ${nonImportantCount} non-important task${nonImportantCount > 1 ? 's' : ''}`);
    }
  };

  const importantTasks = tasks.filter(t => t.priority);
  const otherTasks = tasks.filter(t => !t.priority);

  const renderTaskList = (list) => (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {list.map(task => (
        <li key={task.id} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
          backgroundColor: mode === 'light' ? '#fff' : '#3a2e5c',
          padding: '12px 15px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                appearance: 'none',
                border: '2px solid #28a745',
                outline: 'none',
                cursor: 'pointer',
                marginRight: '12px',
                position: 'relative',
                backgroundColor: task.done ? '#28a745' : 'transparent',
                transition: 'background-color 0.2s ease',
              }}
            />
          </label>

          <span
            style={{
              flexGrow: 1,
              fontSize: '17px',
              fontWeight: task.priority ? '600' : 'normal',
              textDecoration: task.done ? 'line-through' : 'none',
              color: task.priority ? 'green' : (mode === 'light' ? '#000' : '#fff'),
            }}
          >
            {task.text}
          </span>

          <button
            onClick={() => togglePriority(task.id)}
            style={iconButtonStyle}
            title={task.priority ? "Unmark Important" : "Mark Important"}
          >
            {task.priority ? '✅' : '❗'}
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            style={iconButtonStyle}
            title="Delete Task"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '700px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📝 Todo List</h2>

        {/* Input */}
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            style={inputStyle}
          />
          <button style={{ ...buttonStyle, backgroundColor: '#28a745' }} onClick={addTask}>
            ➕ Add
          </button>
        </div>

        {/* Important Section */}
        {importantTasks.length > 0 && (
          <>
            <h4 style={{ marginBottom: '10px', color: 'limegreen' }}>⭐ Important Tasks</h4>
            {renderTaskList(importantTasks)}
          </>
        )}

        {/* Other Tasks Section */}
        {otherTasks.length > 0 && (
          <>
            <h4 style={{ marginTop: '25px', marginBottom: '10px' }}>📌 Other Tasks</h4>
            {renderTaskList(otherTasks)}
          </>
        )}

        {/* Actions */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button onClick={clearCompleted} style={{ ...buttonStyle, backgroundColor: '#ffc107' }}>
            🧹 Remove Completed
          </button>
          <button onClick={clearAll} style={{ ...buttonStyle, backgroundColor: '#dc3545' }}>
            🚫 Clear Non-Important
          </button>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  );
}
