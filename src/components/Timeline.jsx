import { useContext, useState } from 'react';
import { FriendContext } from './Context/Context';

import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const Timeline = () => {
    const data = useContext(FriendContext);
    const FriendChosen = data.FriendChosen;
    const removeEntry = data.removeEntry;
    const [category, setCategory] = useState('All');

    const filtered =
        category === 'All'
            ? [...FriendChosen].reverse()
            : FriendChosen
                  .filter((e) => e.type === category)
                  .reverse();

    return (
        <div className="container mx-auto w-3/4 py-8">
            <h2 className="text-2xl font-bold mb-4">Timeline</h2>

            <select
                className="select select-bordered mb-6 w-48"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

            {filtered.length === 0 ? (
                <p className="text-center text-gray-400 mt-20">
                    No check-ins yet.
                </p>
            ) : (
                <div className="flex flex-col gap-3">
                    {filtered.map((entry) => {
                        const icon =
                            entry.type === 'Call'
                                ? callIcon
                                : entry.type === 'Text'
                                ? textIcon
                                : videoIcon;

                        return (
                            <div
                                key={entry.id}
                                className="flex items-center justify-between gap-4 border border-dashed rounded-xl p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={icon}
                                        alt={entry.type}
                                        className="w-8 h-8"
                                    />

                                    <div>
                                        <p className="text-sm">
                                            <strong>{entry.type}</strong> with {entry.friendName}
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            {entry.date} - {entry.time}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeEntry(entry.id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Timeline;