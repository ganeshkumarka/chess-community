// import React, { useEffect, useState } from 'react';
// import { Redirect, useHistory, useParams } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   List,
//   ListItem,
//   Link,
//   Button,
//   Avatar,
//   VStack,
//   Heading,
// } from '@chakra-ui/react';
// import { FaBars } from 'react-icons/fa';
// import DiscussionForum from './DiscussionForum';
// const UserPage = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const history = useHistory();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const handleLogout = () => {
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
//     <Flex h="100vh" direction="column">
//       {/* Navigation Bar */}
//       <Flex px="4" py="2" bg="gray.800" color="white" alignItems="center" justifyContent="space-between">
//         <Box fontSize="xl" fontWeight="bold">
//           WELCOME CUSAT CHESS COMMUNITY
//         </Box>
//         {/* Profile Box */}
//         <Box bg="white" p="10" borderRadius="md" boxShadow="lg" top="17">
//           <Flex alignItems="center">
//             <Avatar
//               src={userData.profilePicture || 'https://via.placeholder.com/150'} // Placeholder image URL
//               size="sm"
//               mr="2"
//               backgroundColor={userData.profilePicture ? 'transparent' : 'gray.300'}
//             />
//             <VStack alignItems="flex-start" spacing="1">
//               <Text fontWeight="bold">{userData.name}</Text>
//               <Text>{userData.email}</Text>
//             </VStack>
//           </Flex>
//         </Box>
//       </Flex>

//       <Flex flex="1" justify="flex-start" px="6">
//         {/* Sidebar */}
//         <Box bg={isDrawerOpen ? 'gray.800' : 'gray.200'} p={4} borderRadius="md" alignSelf="flex-start"  >
//           <IconButton
//             icon={<FaBars />}
//             aria-label="Toggle Navigation"
//             onClick={handleDrawerToggle}
//             mb={2}
//           />
//           <Drawer placement="left" onClose={handleDrawerToggle} isOpen={isDrawerOpen}>
//             <DrawerOverlay>
//               <DrawerContent>
//                 <DrawerCloseButton />
//                 <DrawerHeader>NAVIGATE TO</DrawerHeader>
//                 <DrawerBody>
//                   <List spacing={3}>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/">HomePage</Link>
//                     </ListItem>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/">Discussion Forum</Link>
//                     </ListItem>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/">Tournaments</Link>
//                     </ListItem>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/home">Achievements</Link>
//                     </ListItem>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/news">News</Link>
//                     </ListItem>
//                     <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                       <Link to="/about">About Us</Link>
//                     </ListItem>
//                     <ListItem>
//                       <Button onClick={handleLogout}>Logout</Button>
//                     </ListItem>
//                   </List>
//                 </DrawerBody>
//               </DrawerContent>
//             </DrawerOverlay>
//           </Drawer>
//         </Box>
//         <Box  p={6} top={500}>
//           {/* <DiscussionForum userId={userData.id}/> */}
        
//           <Text><Link to={`/userpage/${email}/forum/${userData.userId}`}>forum</Link></Text>
//         </Box>
//       </Flex>
//     </Flex>
    
//   );
// };

// export default UserPage;





// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Box,
//   Container,
//   Text,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   List,
//   ListItem,
//   Button,
//   Avatar,
//   Heading,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { FaBars, FaSignOutAlt } from 'react-icons/fa';
// import DiscussionForum from './DiscussionForum';

// const UserPage = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const history = useHistory();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleLogout = () => {
//     // Clear authentication state (if any)
//     // For example, clear any stored tokens or user data from local storage or context
//     // Redirect to the login page
//     history.push('/');
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
//     <Container maxW="100%" h="100vh" p={0}>
//       {/* Navigation Bar */}
//       <Box
//         px="4"
//         py="2"
//         bg="gray.800"
//         color="white"
//         display="flex"
//         alignItems="center"
//         justifyContent="space-between"
//       >
//         <Box display="flex" alignItems="center">
//           <IconButton
//             icon={<FaBars />}
//             aria-label="Toggle Navigation"
//             onClick={onOpen}
//             mr="4"
//           />
//           <Heading size="md">CUSAT Chess Community</Heading>
//         </Box>
//         {/* Profile Box */}
//         <Box display="flex" alignItems="center">
//           {/* <Avatar
//             src={userData.pic || "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"}
//             size="sm"
//             mr="2"
//             backgroundColor={userData.pic ? 'transparent' : 'gray.300'}
//           /> */}
//            <Avatar
//             src={`data:image/jpeg;base64,${userData.pic}`}
//             size="sm"
//             mr="2"
//             backgroundColor={userData.pic ? 'transparent' : 'gray.300'}
//            />
//           <Text fontWeight="bold" mr="4">
//             {userData.name}
//           </Text>
//           <IconButton
//             icon={<FaSignOutAlt />}
//             aria-label="Logout"
//             onClick={handleLogout}
//           />
//         </Box>
//       </Box>

//       <Box display="flex" h="calc(100vh - 56px)">
//         {/* Sidebar */}
//         <Drawer isOpen={isOpen} onClose={onClose} placement="left">
//           <DrawerOverlay>
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader>Navigation</DrawerHeader>
//               <DrawerBody>
//                 <List spacing={3}>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">Home</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     {/* {console.log(userData.email)} */}
//                     <Link to={`/${userData.email}/forum`}>
//                       Discussion Forum
//                     </Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">Tournaments</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/home">Achievements</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/news">News</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/about">About Us</Link>
//                   </ListItem>
//                 </List>
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>

//         {/* <Box flex="1" p={6}>
//           Render the DiscussionForum component
//           <DiscussionForum userId={userData.id} userData={userData} />
//         </Box> */}
//       </Box>
//     </Container>
//   );
// };

// export default UserPage;





import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Button,
  Avatar,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { FaBars, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
//import DiscussionForum from './DiscussionForum';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onClose: onProfileClose,
  } = useDisclosure();

  const handleLogout = () => {
    // Clear authentication state (if any)
    // For example, clear any stored tokens or user data from local storage or context
    // Redirect to the login page
    history.push('/');
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
    <Container maxW="100%" h="100vh" p={0}>
      {/* Navigation Bar */}
      <Box
        px="4"
        py="2"
        bg="gray.800"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <IconButton
            icon={<FaBars />}
            aria-label="Toggle Navigation"
            onClick={onOpen}
            mr="4"
          />
          <Heading size="md">CUSAT Chess Community</Heading>
        </Box>
        {/* Profile Box */}
        <Box display="flex" alignItems="center">
          <IconButton
            icon={<FaUserCircle />}
            aria-label="View Profile"
            onClick={onProfileOpen}
            mr="4"
          />
          <Avatar
            src={`data:image/jpeg;base64,${userData.pic}`}
            size="sm"
            mr="2"
            backgroundColor={userData.pic ? 'transparent' : 'gray.300'}
          />
          <Text fontWeight="bold" mr="4">
            {userData.name}
          </Text>
          <IconButton
            icon={<FaSignOutAlt />}
            aria-label="Logout"
            onClick={handleLogout}
          />
        </Box>
      </Box>

      <Box display="flex" h="calc(100vh - 56px)">
        {/* Sidebar */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Navigation</DrawerHeader>
              <DrawerBody>
                <List spacing={3}>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/">Home</Link>
                  </ListItem>
                  {/* <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to={`/${userData.email}/forum`}>
                      Discussion Forum
                    </Link>
                  </ListItem> */}
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
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        {/* Profile Modal */}
        <Modal isOpen={isProfileOpen} onClose={onProfileClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={`data:image/jpeg;base64,${userData.pic}`}
                  size="2xl"
                  mb="4"
                />
                <Text fontWeight="bold" fontSize="xl">
                  {userData.name}
                </Text>
                <Text>{userData.email}</Text>
                <Text>Rating: {userData.userI || 'N/A'}</Text>
                <Text>Achievements: {userData.userI || 'N/A'}</Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* <Box flex="1" p={6}>
          Render the DiscussionForum component
          <DiscussionForum userId={userData.userId} userData={userData} />
        </Box> */}
      </Box>
    </Container>
  );
};

export default UserPage;