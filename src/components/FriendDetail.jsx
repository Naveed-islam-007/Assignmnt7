import { useParams } from 'react-router';
import Hook from './hook/Hook';
import { HashLoader } from 'react-spinners';
import { useContext } from 'react';
import { FriendContext } from './Context/Context';

import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const FriendDetail = () => {

    const params = useParams();
    const id = params.id;

    const data = Hook();
    const apps = data.apps;
    const loading = data.loading;

    const contextData = useContext(FriendContext);
    const FriendChosen = contextData.FriendChosen;
    const setFriendChosen = contextData.setFriendChosen;

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <HashLoader color="#ad46ff" />
            </div>
        );
    }

    const friend = apps.find((item) => {
        return item.id == id;
    });

    const handleCheckIn = (type) => {

        const newEntry = {
            id: Date.now(),
            friendId: friend.id,
            friendName: friend.name,
            friendPicture: friend.picture,
            type: type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };

        
        setFriendChosen([...FriendChosen, newEntry]);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 w-3/4 mx-auto min-h-[600px] pt-20">

            <div className="flex flex-col gap-3">

                <div className="shadow-md p-4 text-center">
                    <img
                        src={friend.picture}
                        alt=""
                        className="w-20 h-20 rounded-full mx-auto"
                    />

                    <h2 className="font-bold mt-2">{friend.name}</h2>

                    <p>{friend.status}</p>

                    <div>
                        {friend.tags.map((tag) => (
                            <span key={tag} className="mr-2 text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm mt-2">{friend.bio}</p>
                </div>

                <div className="shadow-md">
                    <button className="w-full py-2 btn">Snooze</button>
                    <button className="w-full py-2 btn">Archive</button>
                    <button className="w-full py-2 text-red-500 btn">Delete</button>
                </div>

            </div>

           
            <div className="flex flex-col gap-4">

                <div className="grid grid-cols-3 gap-5  shadow-md p-4">
                    <div className='btn p-10 flex flex-col'>
                        <h3>{friend.days_since_contact}</h3>
                        <p>Days</p>
                    </div>

                    <div className='btn p-10 flex flex-col'>
                        <h3>{friend.goal}</h3>
                        <p>Goal</p>
                    </div>

                    <div className='btn p-10 flex flex-col'>
                        <h3>{friend.next_due_date}</h3>
                        <p>Next</p>
                    </div>
                </div>

                <div className="shadow-md p-4 flex justify-between items-center">
                    <div>
                        <h3 className='text-2xl font-bold'>Goal</h3>
                    <p>Connect every {friend.goal} days</p>
                    </div>

                    <div>
                        <button className='btn'>Edit</button>
                    </div>
                </div>

                <div className="shadow-md p-4">
                    <h3>Quick Check</h3>

                    <div className="grid grid-cols-3 gap-2">

                        <div onClick={() => handleCheckIn('Call')} className="text-center cursor-pointer btn flex flex-col p-10">
                            <img src={callIcon} className="w-8 mx-auto" />
                            <p>Call</p>
                        </div>

                        <div onClick={() => handleCheckIn('Text')} className="text-center cursor-pointer btn flex flex-col p-10">
                            <img src={textIcon} className="w-8 mx-auto" />
                            <p>Text</p>
                        </div>

                        <div onClick={() => handleCheckIn('Video')} className="text-center cursor-pointer btn flex flex-col p-10">
                            <img src={videoIcon} className="w-8 mx-auto" />
                            <p>Video</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default FriendDetail;