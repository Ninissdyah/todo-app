import { useState, useEffect } from 'react';

const STORAGE_KEY = 'todo-app-data';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchTodos = () => {
    // Fetch active todos
    fetch('/api/todos?completed=0')
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setTodos(data.data);
        }
      })
      .catch(err => console.error('Error fetching todos:', err));

    // Fetch history (completed todos)
    fetch('/api/todos?completed=1')
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          setHistory(data.data);
        }
      })
      .catch(err => console.error('Error fetching history:', err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    // Request notification permission on mount
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  const addTodo = (text, date) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      date: date, // ISO string or Date object
      createdAt: new Date().toISOString(),
    };

    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          setTodos((prev) => [...prev, newTodo]);
        }
      })
      .catch(err => console.error('Error adding todo:', err));

    // Schedule notification if supported
    if ('Notification' in window && Notification.permission === 'granted') {
      // Simple immediate notification for demo purposes or schedule logic
      // For a real app, we'd need a service worker or interval check.
      // We'll implement a simple interval check in the main app or here.
    }
  };

  const markAsDone = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: 1 }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          // Move from todos to history locally
          const todoToMove = todos.find(t => t.id === id);
          if (todoToMove) {
            setTodos(prev => prev.filter(t => t.id !== id));
            setHistory(prev => [...prev, { ...todoToMove, completed: 1 }]);
          }
        }
      })
      .catch(err => console.error('Error marking todo as done:', err));
  };

  const deletePermanent = (id) => {
    fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'deleted') {
          setHistory((prev) => prev.filter((todo) => todo.id !== id));
        }
      })
      .catch(err => console.error('Error deleting todo:', err));
  };

  return { todos, history, addTodo, markAsDone, deletePermanent };
}
