import { Check } from 'lucide-react';

export default function ActivityItem({ todo, onDone }) {
    return (
        <div className="activity-item">
            <div className="activity-info">
                <span className="activity-text">
                    {todo.text}
                </span>
                <span className="activity-time">
                    {new Date(todo.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>

            <button
                onClick={() => onDone(todo.id)}
                className="done-btn"
            >
                <Check size={16} />
                Done
            </button>
        </div>
    );
}
