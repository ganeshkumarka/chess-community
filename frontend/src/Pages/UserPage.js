// //userpage

// //second one

// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { 
//   Container,
//   Box,
//   Text,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Image, UnorderedList, ListItem,Link
// } from '@chakra-ui/react'
// const UserPage = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const history = useHistory();
//   console.log('Email:', email);
//   useEffect(() => {
//     // Fetch user data after login
//     const fetchData = async () => {
//       try {
//         // Fetch user data using the email parameter
//         const response = await axios.get(`/api/user/${email}`);
//         setUserData(response.data.user);
//         console.log('Fetched user data:', response.data); 
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         // Redirect to login page if unauthorized or error occurs
//         history.push('/login');
//       }
//     };

//     fetchData();
//   }, [email, history]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
    
//       <h1>Welcome, {userData.name}</h1>
//       <p>Email: {userData.email}</p>
//       <h1>WELCOME</h1>
    
//     </div>
    
//   );
// };

// export default UserPage;


//second one

// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Text, VStack } from '@chakra-ui/react';

// // ProfileBox component to display user profile details
// const ProfileBox = ({ userData }) => {
//   return (
//     <Box
//       position="fixed"
//       top="20px"
//       right="20px"
//       bg="white"
//       boxShadow="md"
//       p="4"
//       borderRadius="md"
//     >
//       <Text fontSize="lg" fontWeight="bold">Profile</Text>
//       <VStack align="flex-start" spacing="2" mt="2">
//         <Text>Name: {userData.name}</Text>
//         <Text>Email: {userData.email}</Text>
//         {/* Add more profile details here */}
//       </VStack>
//     </Box>
//   );
// };

// const UserPage = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/user/${email}`);
//         setUserData(response.data.user);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         history.push('/login');
//       }
//     };

//     fetchData();
//   }, [email, history]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {userData.name}</h1>
//       <p>Email: {userData.email}</p>
//       <h1>WELCOME</h1>

//       {/* Render ProfileBox component and pass userData */}
//       <ProfileBox userData={userData} />
//     </div>
//   );
// };

// export default UserPage;


//third one

// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Flex, Text, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Link } from '@chakra-ui/react';
// import { FaBars } from 'react-icons/fa';

// const UserPage = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const history = useHistory();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer open/close

//   // Function to handle drawer toggle
//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };
//  const handleLogout = () => {
//     // Clear authentication state (if any)
//     // For example, clear any stored tokens or user data from local storage or context
//     // Redirect to the login page
//     history.push('/login');
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/api/user/${email}`);
//         setUserData(response.data.user);
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         history.push('/login');
//       }
//     };

//     fetchData();
//   }, [email, history]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Flex>
//       <Box bg={isDrawerOpen ? 'gray.800' : 'gray.200'} p={4} borderRadius="md" ml={0} alignSelf="flex-start" position="absolute" top={5} left={5}>
//         <IconButton icon={<FaBars />} aria-label="Toggle Navigation" onClick={handleDrawerToggle} mb={2} />
//         <Drawer placement="left" onClose={handleDrawerToggle} isOpen={isDrawerOpen}>
//           <DrawerOverlay>
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader>NAVIGATE TO</DrawerHeader>
//               <DrawerBody>
//                 <List spacing={3}>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">HomePage</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">Discussion Forum</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">Tournaments</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/home">Achievements</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/home">News</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/about">About Us</Link>
//                   </ListItem>
//                 </List>
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>
//       </Box>
//       <Box bg="gray.200" p={8} borderRadius="md" ml={0} alignSelf="flex-start" position="absolute" top={100} left={600}>
//         <Text fontSize="xl" color="red">Welcome, {userData.name}</Text>
//         <Text fontSize="lg" color="red">Email: {userData.email}</Text>
//         <Text fontSize="lg" color="red">WELCOME</Text>
//       </Box>
//     </Flex>
//   );
// };

// export default UserPage;


//fourth one with logout

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Flex, Text, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Link, Button } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer open/close

  // Function to handle drawer toggle
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    // Clear authentication state (if any)
    // For example, clear any stored tokens or user data from local storage or context
    // Redirect to the login page
    history.push('/login');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/${email}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        history.push('/login');
      }
    };

    fetchData();
  }, [email, history]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Flex>
      <Box bg={isDrawerOpen ? 'gray.800' : 'gray.200'} p={4} borderRadius="md" ml={0} alignSelf="flex-start" position="absolute" top={5} left={5}>
        <IconButton icon={<FaBars />} aria-label="Toggle Navigation" onClick={handleDrawerToggle} mb={2} />
        <Drawer placement="left" onClose={handleDrawerToggle} isOpen={isDrawerOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>NAVIGATE TO</DrawerHeader>
              <DrawerBody>
                <List spacing={3}>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/">HomePage</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/">Discussion Forum</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/">Tournaments</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/home">Achievements</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/news">News</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/about">About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Button onClick={handleLogout}>Logout</Button>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
      <Box bg="gray.200" p={8} borderRadius="md" ml={0} alignSelf="flex-start" position="absolute" top={100} left={600}>
        <Text fontSize="xl" color="red">Welcome, {userData.name}</Text>
        <Text fontSize="lg" color="red">Email: {userData.email}</Text>
        <Text fontSize="lg" color="red">WELCOME</Text>
      </Box>
    </Flex>
  );
};

export default UserPage;
