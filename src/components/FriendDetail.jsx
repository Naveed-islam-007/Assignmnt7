import { useParams } from 'react-router';
import Hook from './hook/Hook';
import { HashLoader } from 'react-spinners';
import { useContext } from 'react';
import { FriendContext } from './Context/Context';


import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const FriendDetail = () => {
    const { id } = useParams();
    const { apps, loading } = Hook();
    const { FriendChosen, setFriendChosen } = useContext(FriendContext);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <HashLoader color="#ad46ff" />
        </div>
    );

    const friend = apps.find((f) => f.id === Number(id));

    const handleCheckIn = (type) => {
        const newEntry = {
            id: Date.now(),
            friendId: friend.id,
            friendName: friend.name,
            friendPicture: friend.picture,
            type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };

        setFriendChosen([...FriendChosen, newEntry]);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 rounded-xl p-4 w-3/4 container mx-auto min-h-[500px]">

            {/* LEFT PANEL */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col items-center text-center shadow-md rounded-xl p-4 gap-2">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <h2 className="font-bold text-lg">{friend.name}</h2>

                    <span className={`badge ${
                        friend.status === 'on-track' ? 'badge-success' :
                        friend.status === 'almost due' ? 'badge-warning' :
                        'badge-error'
                    }`}>
                        {friend.status}
                    </span>

                    <div className="flex gap-2 flex-wrap justify-center">
                        {friend.tags.map((tag) => (
                            <span key={tag} className="badge badge-soft badge-accent">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm italic text-gray-500">"{friend.bio}"</p>
                </div>

                <div className="flex flex-col shadow-md rounded-xl divide-y">
                    <button className="py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
                        🔔 Snooze 2 Weeks
                    </button>
                    <button className="py-3 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
                        📁 Archive
                    </button>
                    <button className="py-3 flex items-center justify-center gap-2 text-sm text-red-500 hover:bg-gray-50">
                        🗑 Delete
                    </button>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col gap-4">

                {/* STATS */}
                <div className="grid grid-cols-3 shadow-md rounded-xl divide-x">
                    <div className="flex flex-col items-center py-5">
                        <span className="text-3xl font-bold">{friend.days_since_contact}</span>
                        <span className="text-sm text-gray-500">Days Since Contact</span>
                    </div>
                    <div className="flex flex-col items-center py-5">
                        <span className="text-3xl font-bold">{friend.goal}</span>
                        <span className="text-sm text-gray-500">Goal (Days)</span>
                    </div>
                    <div className="flex flex-col items-center py-5">
                        <span className="text-3xl font-bold text-teal-500">{friend.next_due_date}</span>
                        <span className="text-sm text-gray-500">Next Due</span>
                    </div>
                </div>

                {/* GOAL */}
                <div className="shadow-md rounded-xl p-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold">Relationship Goal</h3>
                        <button className="btn btn-sm">Edit</button>
                    </div>
                    <p className="mt-2 text-sm">
                        Connect every <strong>{friend.goal} days</strong>
                    </p>
                </div>

                {/* QUICK CHECK-IN */}
                <div className="shadow-md rounded-xl p-4">
                    <h3 className="font-bold mb-3">Quick Check-In</h3>

                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { label: 'Call', type: 'Call', icon: callIcon },
                            { label: 'Text', type: 'Text', icon: textIcon },
                            { label: 'Video', type: 'Video', icon: videoIcon },
                        ].map(({ label, type, icon }) => (
                            <div
                                key={type}
                                onClick={() => handleCheckIn(type)}
                                className="border rounded-xl py-4 flex flex-col items-center gap-1 hover:bg-gray-50 text-sm cursor-pointer"
                            >
                                <img src={icon} alt={type} className="w-8 h-8" />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetail;