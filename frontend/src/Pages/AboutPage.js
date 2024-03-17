import React, { useState } from 'react'; // Import useState for managing state

import {
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Container,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub, FaBars } from 'react-icons/fa';
//import { FaBars } from '@fortawesome/react-fontawesome';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
import top1Image from './top1.png';
import top2Image from './lefttop.png';
import top3Image from './topfull.png';

const AboutPage = () => {
  // Define state variables for drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to handle drawer toggle
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container className='main' maxW="100%"> 
      <Box
        bg="gray.200"
        p={8}
        borderRadius="md"
        ml={0}
        alignSelf="flex-start"
        position="absolute"
        top={100}
        left={600}
        //right={50}
      >
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
                    <Link to="/members">Members</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/">Discussion</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/achievements">Achievements</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/news">News</Link>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Text fontSize="xl" color="red">
          UNDER MAINTENANCE(ABOUT)
        </Text>
        <Text fontSize="lg" color="red">
          Sorry for the inconvenience.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutPage;
