import { isToday, isTomorrow, isWithinInterval, addDays, parseISO, startOfDay } from 'date-fns';
import ActivityItem from './ActivityItem';

export default function ActivityList({ todos, onDone }) {
    const todayTodos = [];
    const tomorrowTodos = [];
    const next7DaysTodos = [];
    const otherTodos = [];

    const now = new Date();
    const todayStart = startOfDay(now);
    const next7Start = addDays(todayStart, 2); // Starts after tomorrow
    const next7End = addDays(todayStart, 8);

    todos.forEach((todo) => {
        const date = parseISO(todo.date);
        if (isToday(date)) {
            todayTodos.push(todo);
        } else if (isTomorrow(date)) {
            tomorrowTodos.push(todo);
        } else if (isWithinInterval(date, { start: next7Start, end: next7End })) {
            next7DaysTodos.push(todo);
        } else {
            otherTodos.push(todo);
        }
    });

    // Sort by time
    const sortByDate = (a, b) => new Date(a.date) - new Date(b.date);
    todayTodos.sort(sortByDate);
    tomorrowTodos.sort(sortByDate);
    next7DaysTodos.sort(sortByDate);

    const Section = ({ title, items }) => (
        items.length > 0 && (
            <div>
                <h3 className="section-title">
                    {title}
                </h3>
                <div>
                    {items.map((todo) => (
                        <ActivityItem key={todo.id} todo={todo} onDone={onDone} />
                    ))}
                </div>
            </div>
        )
    );

    return (
        <div className="activity-list-container">
            {todos.length === 0 ? (
                <div className="empty-state">
                    <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No activities yet.</p>
                    <p style={{ fontSize: '0.875rem' }}>Tap the + button to add one!</p>
                </div>
            ) : (
                <>
                    <Section title="Today" items={todayTodos} />
                    <Section title="Tomorrow" items={tomorrowTodos} />
                    <Section title="Next 7 Days" items={next7DaysTodos} />
                </>
            )}
        </div>
    );
}
