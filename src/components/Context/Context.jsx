import { createContext, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [FriendChosen, setFriendChosen] = useState([]);

    const removeEntry = (id) => {
        setFriendChosen((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    return (
        <FriendContext.Provider
            value={{ FriendChosen, setFriendChosen, removeEntry }}
        >
            {children}
        </FriendContext.Provider>
    );
};