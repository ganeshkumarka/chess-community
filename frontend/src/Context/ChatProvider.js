// import React, { createContext, useContext, useEffect, useState } from "react";
// import {useHistory } from "react-router";
// //import { useHistory } from 'react-router-dom';
// //import { useHistory } from 'react-router-dom';
// import axios from 'axios';


// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [user, setUser] = useState();
//   const [notification, setNotification] = useState([]);
//   const [chats, setChats] = useState();

//   const history = useHistory();

//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setUser(userInfo);

//   //   if (!userInfo) history.push("/");
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const fetchUserData = async () => {
//     try {
//       // Make a request to your backend API to fetch user data
//       const response = await axios.get('/api/users'); // Adjust the endpoint as per your backend setup
//       const userData = response.data; // Assuming your backend sends user data in the response

//       // Set the user state with the retrieved data
//       setUser(userData);
//     } catch (error) {
//       // Handle errors, such as network errors or server errors
//       console.error('Error fetching user data:', error);
//       // Optionally, you can redirect the user to the login page if there's an error
//       history.push("/loginc");
//     }};  fetchUserData();
//    }, [history]);

//   return (
//     <ChatContext.Provider
//       value={{
//         selectedChat,
//         setSelectedChat,
//         user,
//         setUser,
//         notification,
//         setNotification,
//         chats,
//         setChats,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

// export default ChatProvider;



//2 one

import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//import { useHistory } from 'react-router-dom';
//import { useHistory } from 'react-router-dom';

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState();
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;

