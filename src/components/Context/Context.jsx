import { createContext, useState } from "react";

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
    const [FriendChosen, setFriendChosen] = useState([]);

   const removeEntry = (id) => {
    const updatedList = FriendChosen.filter((item) => item.id !== id);
    setFriendChosen(updatedList);
};


    return (
        <FriendContext.Provider  value={{ FriendChosen, setFriendChosen, removeEntry }}>
            {children}
        </FriendContext.Provider>
    );
};