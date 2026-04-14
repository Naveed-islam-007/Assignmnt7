import React from 'react';
import Hook from './hook/Hook';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';

const Friends = () => {
    const { apps, loading } = Hook();

    return loading ? (
        <div className="flex justify-center items-center">
            <HashLoader color="#ad46ff" />
        </div>
    ) : (
        <>
            {apps.map((friend) => (
                <Link to={`/friend/${friend.id}`} key={friend.id}>
                    <div className="card bg-base-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                        <figure>
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-30 h-30 object-cover rounded-full"
                            />
                        </figure>
                        <div className="card-body flex justify-center items-center flex-col">
                            <h2 className="card-title">{friend.name}</h2>
                            <p>{friend.days_since_contact} days ago</p>
                            <p className={`${friend.status === 'on-track'  ? 'badge badge-success' :
                                            friend.status === 'almost due' ? 'badge badge-warning' :
                                            friend.status === 'overdue'    ? 'badge badge-error'   :
                                            'text-gray-500'}`}>
                                {friend.status}
                            </p>
                            <div className="flex gap-2 flex-wrap justify-center">
                                {friend.tags.map((tag) => (
                                    <span key={tag} className="badge badge-soft badge-accent">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default Friends;