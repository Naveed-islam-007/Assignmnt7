import React, { createContext, useState } from 'react';

export const FriendContext = createContext();

const Context = ({ children }) => {
    const [FriendChosen, setFriendChosen] = useState([]);

    const data = {
        FriendChosen,
        setFriendChosen
    };

    return (
        <FriendContext.Provider value={data}>
            {children}
        </FriendContext.Provider>
    );
};

export default Context;