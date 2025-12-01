import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import ThemeToggle from './components/ThemeToggle';
import ActivityList from './components/ActivityList';
import AddActivityBtn from './components/AddActivityBtn';
import HistoryPanel from './components/HistoryPanel';
import { Menu } from 'lucide-react';

function App() {
  const { todos, history, addTodo, markAsDone, deletePermanent } = useTodos();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Background decoration */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button
            className="menu-btn"
            onClick={() => setIsHistoryOpen(true)}
            title="History"
          >
            <Menu size={24} />
          </button>
          <h1 className="app-title">
            My Activities
          </h1>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="main-content">
        <ActivityList todos={todos} onDone={markAsDone} />
      </main>

      {/* Floating Action Button */}
      <AddActivityBtn onAdd={addTodo} />

      {/* History Panel */}
      <HistoryPanel
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onDeletePermanent={deletePermanent}
      />
    </div>
  );
}

export default App;
