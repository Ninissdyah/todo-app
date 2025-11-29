import { useState, useEffect } from 'react';

const STORAGE_KEY = 'todo-app-data';

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
    setTodos((prev) => [...prev, newTodo]);
    
    // Schedule notification if supported
    if ('Notification' in window && Notification.permission === 'granted') {
        // Simple immediate notification for demo purposes or schedule logic
        // For a real app, we'd need a service worker or interval check.
        // We'll implement a simple interval check in the main app or here.
    }
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, removeTodo };
}
