import { useState } from 'react';
import { Plus, X, Calendar, Clock } from 'lucide-react';

export default function AddActivityBtn({ onAdd }) {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text || !date || !time) return;

        const dateTime = new Date(`${date}T${time}`).toISOString();
        onAdd(text, dateTime);

        // Reset and close
        setText('');
        setIsOpen(false);
    };

    // Set default date/time when opening
    const handleOpen = () => {
        const now = new Date();
        setDate(now.toISOString().split('T')[0]);
        setTime(now.toTimeString().slice(0, 5));
        setIsOpen(true);
    };

    return (
        <>
            <div className="fab-container">
                <button
                    onClick={handleOpen}
                    className="fab-btn"
                >
                    <Plus size={24} />
                    Add New Activity
                </button>
            </div>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="close-btn"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="modal-title">New Activity</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">
                                    Activity Name
                                </label>
                                <input
                                    type="text"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="What needs to be done?"
                                    className="form-input"
                                    autoFocus
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div className="form-group">
                                    <label className="form-label">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Calendar size={16} /> Date
                                        </div>
                                    </label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Clock size={16} /> Time
                                        </div>
                                    </label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                Create Activity
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
