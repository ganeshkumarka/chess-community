import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Flex,
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
  Link,
  Button,
  Avatar,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const { email } = useParams();
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
    <Flex h="100vh" direction="column">
      {/* Navigation Bar */}
      <Flex px="4" py="2" bg="gray.800" color="white" alignItems="center" justifyContent="space-between">
        <Box fontSize="xl" fontWeight="bold">
          WELCOME CUSAT CHESS COMMUNITY
        </Box>
        {/* Profile Box */}
        <Box bg="white" p="2" borderRadius="md" boxShadow="lg">
          <Flex alignItems="center">
            <Avatar
              src={userData.profilePicture || 'https://via.placeholder.com/150'} // Placeholder image URL
              size="sm"
              mr="2"
              backgroundColor={userData.profilePicture ? 'transparent' : 'gray.300'}
            />
            <VStack alignItems="flex-start" spacing="1">
              <Text fontWeight="bold">{userData.name}</Text>
              <Text>{userData.email}</Text>
            </VStack>
          </Flex>
        </Box>
      </Flex>

      <Flex flex="1" justify="flex-start" px="6">
        {/* Sidebar */}
        <Box bg={isDrawerOpen ? 'gray.800' : 'gray.200'} p={4} borderRadius="md" alignSelf="flex-start" marginLeft={4}>
          <IconButton
            icon={<FaBars />}
            aria-label="Toggle Navigation"
            onClick={handleDrawerToggle}
            mb={2}
          />
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
      </Flex>
    </Flex>
  );
};

export default UserPage;