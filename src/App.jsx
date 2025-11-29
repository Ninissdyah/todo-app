import { useTodos } from './hooks/useTodos';
import ThemeToggle from './components/ThemeToggle';
import ActivityList from './components/ActivityList';
import AddActivityBtn from './components/AddActivityBtn';

function App() {
  const { todos, addTodo, removeTodo } = useTodos();

  return (
    <div className="app-container">
      {/* Background decoration */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Header */}
      <header className="header">
        <h1 className="app-title">
          My Activities
        </h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="main-content">
        <ActivityList todos={todos} onDone={removeTodo} />
      </main>

      {/* Floating Action Button */}
      <AddActivityBtn onAdd={addTodo} />
    </div>
  );
}

export default App;
