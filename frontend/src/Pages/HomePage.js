import React from 'react'
import { 
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image, UnorderedList, ListItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/SignUp';
// maxW='xl'
const HomePage = () => {
  return (
    <Container className='main' maxW="100%"> 
   
    <Box 
      classname='mainb'
      // p={4}
      display="flex"
      //justifyContent="center"
      flexDirection="column"
      justifyContent="end"
      align-items="flex-end"
      p = "50px"
      // bg="white"
      w="100%"
      //h="100%"
      m="5px 0px 5px 0px"
      borderRadius="10px"
      borderWidth="1px"
      //alignItems="flex-start"
      marginLeft="auto"
      marginRight="auto"
      h="200px"
      position="relative"
      >
       <Tabs variant='soft-rounded' width="100%" position="absolute" bottom="0" right="0">
        <TabList mb="1em" color="red">
          <Tab width="10%" style={{ color: 'red' }}><Link to="/login">Login</Link></Tab>
          <Tab width="10%" style={{ color: 'red' }}><Link to="/signup">SignUp</Link></Tab>
         </TabList>
         <TabPanels>
          <TabPanel>
            {/* <Login/>  */}
          </TabPanel>
          <TabPanel>
            {/* <Signup/> */}
         </TabPanel>
      </TabPanels>
      </Tabs>

      {/* <Text fontSize="2xl" fontFamily="Work sans" color="black">CUSAT CHESS COMMUNITY</Text>   */}
    </Box>
      <Box
       d="flex"
      justifyContent="center"
      p = "2px"
      bgGradient="linear(to-r,rgba(0,0,0,0.7), pink.200, black)"    
      w="100%"
      h="100%"
      m="15px 0px 15px 0px"
      borderRadius="1px"
      borderWidth="1px"
      alignItems="flex-start"
      marginLeft="auto"
      marginRight="auto"
      width="100%"
      > <Tabs variant='soft-rounded' width="100%" >
  <TabList mb="1em" color="red">
    <Tab width="50%" style={{ color: 'red' }}>Members</Tab>
    <Tab width="50%" style={{ color: 'red' }}>Discussion forum</Tab>
    <Tab width="50%" style={{ color: 'red' }}>Tournaments</Tab>
    <Tab width="50%" style={{ color: 'red' }}>Achievements</Tab>
    <Tab width="50%" style={{ color: 'red' }}>News</Tab>
    <Tab width="50%" style={{ color: 'red' }}>About Us</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {/* <Login/>  */}
    </TabPanel>
    <TabPanel>
      {/* <Signup/> */}
    </TabPanel>
  </TabPanels>
</Tabs>
          {/* <Text fontSize="2xl" fontFamily="Work sans" color="red"></Text> */}
      </Box>  
      <Box className="container" display="flex" justifyContent="space-around">
      <Box className="section" width="30%" bgGradient="linear(to-r,rgba(0,0,0,0.7), pink.200, black)" >
        <Text as="h2" fontSize="xl" fontWeight="bold" mb={4}>
          Announcements
        </Text>
        <UnorderedList className="announcement-list">
          {/* Announcement items will be added dynamically here */}
          <ListItem>Announcement 1</ListItem>
          <ListItem>Announcement 2</ListItem>
          <ListItem>Announcement 3</ListItem>
        </UnorderedList>
      </Box>
      <Box className="section" width="30%" bgGradient="linear(to-r,rgba(0,0,0,0.7), pink.200, black)" h="440px">
        <Text as="h2" fontSize="xl" fontWeight="bold" mb={4}>
          Events
        </Text>
        <UnorderedList className="event-list">
          {/* Event items will be added dynamically here */}
          <ListItem>Event 1</ListItem>
          <ListItem>Event 2</ListItem>
          <ListItem>Event 3</ListItem>
        </UnorderedList>
      </Box>
      <Box className="section" width="30%" bgGradient="linear(to-r,rgba(0,0,0,0.7), pink.200, black)" h="440px" >
        <Text as="h2" fontSize="xl" fontWeight="bold" mb={4}>
          Gallery
        </Text>
        <Box className="gallery" mx={0} h="200px">
          {/* Gallery images will be added dynamically here */}
          <Image src="./top1.png" alt="Image 1" mb={2} />
          <Image src="./top1.png" alt="Image 2" mb={2} />
          <Image src="./top1.png" alt="Image 3" mb={2} />
        </Box>
      </Box>
    </Box>
    </Container>
  )
}

export default HomePage
