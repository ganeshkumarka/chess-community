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
//import Signup from '../components/Authentication/SignUp';
import top1Image from './top1.png';
import top2Image from './lefttop.png';
import top3Image from './topfull.png';
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
      //alignItems="center"
      //alignItems="flex-end"
      p = "10px"
      // bg="white"
      w="100%"
      //h="100%"
      m="5px 0px 5px 0px"
      borderRadius="7px"
      borderWidth="0px"
      alignItems="flex-start"
      marginLeft="auto"
      marginRight="auto"
      h="200px"
      position="relative"
      ><img src={top3Image} alt="img "style={{ width: '1450px', height: '500px' }} />
       <Tabs variant='soft-rounded' width="100%" position="absolute" top="140" left="1000" zIndex={2}>
        <TabList mb="1em" color="red" classname="tablist1">
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'black' }} ><Link to="/login">Login</Link></Tab>
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Link to="/signup">SignUp</Link></Tab>
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
       {/* <Box position="absolute" right="10px" top="10px" zIndex={1}>
          <img src={top2Image} alt="Right Image" style={{ width: '700px', height: '178.5px' }} />
        </Box> */}

      {/* <Text fontSize="2xl" fontFamily="Work sans" color="black">CUSAT CHESS COMMUNITY</Text>   */}
    </Box>
      <Box
       d="flex"
      justifyContent="center"
      p = "5px"
      bgGradient="linear(to-r,rgba(0,0,0,0.7), pink.200, black)"    
      //w="100%"
      //h="100%"
      m="15px 10px 15px 10px"
      borderRadius="1px"
      borderWidth="0px"
      alignItems="flex-start"
      marginLeft="auto"
      marginRight="auto"
      width="100%"
      > <Tabs variant='soft-rounded' width="100%" >
  <TabList mb="1em" color="red" classname="tablist2">
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black'}}>Members</Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}>Discussion forum</Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}>Tournaments</Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}>Achievements</Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}>News</Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}>About Us</Tab>
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
      <Box className="section" width="30%" bgGradient="linear(to-r,rgba(32, 22, 68, 0.7), pink.200,pink.300 )" >
        <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4} >
          ANNOUNCEMENTS
        </Text>
        <UnorderedList className="announcement-list">
          {/* Announcement items will be added dynamically here */}
          <ListItem >Announcement 1</ListItem>
          <ListItem>Announcement 2</ListItem>
          <ListItem>Announcement 3</ListItem>
        </UnorderedList>
      </Box>
      <Box className="section" width="30%" bgGradient="linear(to-r, pink.200,pink.300,pink.200)" h="440px">
        <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4}>
          EVENT
        </Text>
        <UnorderedList className="event-list">
          {/* Event items will be added dynamically here */}
          <ListItem>Event 1</ListItem>
          <ListItem>Event 2</ListItem>
          <ListItem>Event 3</ListItem>
        </UnorderedList>
      </Box>
      <Box className="section" width="30%" bgGradient="linear(to-r, pink.200, rgba(32, 22, 68, 0.7))" h="440px" borderRadius="10px" >
        <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4}>
          GALLERY
        </Text>
        <Box className="gallery" mx={0} h="200px">
          {/* Gallery images will be added dynamically here */}
          {/* <Image src="./" alt="Image 1" mb={2} />
          <Image src="./top1.png" alt="Image 2" mb={2} />
          <Image src="./top1.png" alt="Image 3" mb={2} /> */}
        </Box>
      </Box>
    </Box>
    </Container>
  )
}

export default HomePage
