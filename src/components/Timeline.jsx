import { useContext, useState } from 'react';
import { FriendContext } from './Context/Context';

const iconMap = { Call: '📞', Text: '💬', Video: '🎥', Meetup: '🤝' };

const Timeline = () => {
    const { FriendChosen } = useContext(FriendContext);
    const [filter, setFilter] = useState('All');

    const filtered = filter === 'All'
        ? [...FriendChosen].reverse()
        : [...FriendChosen].filter((e) => e.type === filter).reverse();

    return (
        <div className="container mx-auto w-3/4 py-8">
            <h2 className="text-2xl font-bold mb-4">Timeline</h2>

            {/* Filter Dropdown */}
            <select
                className="select select-bordered mb-6 w-48"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                {['All', 'Call', 'Text', 'Video', 'Meetup'].map((f) => (
                    <option key={f}>{f}</option>
                ))}
            </select>

            {filtered.length === 0 ? (
                <p className="text-center text-gray-400 mt-20">No check-ins yet.</p>
            ) : (
                <div className="flex flex-col gap-3">
                    {filtered.map((entry) => (
                        <div key={entry.id} className="flex items-center gap-4 border border-dashed rounded-xl p-4">
                            <span className="text-2xl">{iconMap[entry.type]}</span>
                            <div>
                                <p className="text-sm">
                                    <strong>{entry.type}</strong> with {entry.friendName}
                                </p>
                                <p className="text-xs text-gray-400">{entry.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Timeline;