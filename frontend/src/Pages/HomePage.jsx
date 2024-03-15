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
  Image, UnorderedList, ListItem,Flex,Icon
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { FaChessBoard, FaNewspaper,FaUsers, FaComments, FaTrophy, FaInfoCircle,FaSignInAlt, FaUserPlus  } from 'react-icons/fa';


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
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'black' }} ><Icon as={FaSignInAlt} boxSize={6} mr={2} /><Link to="/login">Login</Link></Tab>
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaUserPlus} boxSize={6} mr={2} /><Link to="/signup">SignUp</Link></Tab>
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
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black'}}><Icon as={FaUsers} boxSize={6} mr={2} /><Link to="/members">Members</Link></Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaComments} boxSize={6} mr={2} /><Link to="/">Discussion forum</Link></Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaChessBoard} boxSize={6} mr={2} /><Link to="/tournament">Tournaments</Link></Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaTrophy} boxSize={6} mr={2} /><Link to="/achievements">Achievements</Link></Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaNewspaper} boxSize={6} mr={2} /><Link to="/news">News</Link></Tab>
    <Tab _hover={{ bg: 'blue.500' }} bg="#DFF5FF" width="50%" fontWeight="bold" fontSize="lg" style={{ color: 'black' }}><Icon as={FaInfoCircle} boxSize={6} mr={2} /><Link to="/about">About Us</Link></Tab>
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

      {/* <Box className="section" width="30%" bgGradient="linear(to-r, pink.200, rgba(32, 22, 68, 0.7))" h="440px" borderRadius="10px" >
        <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4}>
          GALLERY
        </Text> */}
        
        {/* <Box className="gallery" width="30%" bgGradient="linear(to-r, pink.200, rgba(32, 22, 68, 0.7))" h="440px" borderRadius="10px">
  <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
    GALLERY
  </Text>
  <Flex className="gallery" direction="column" alignItems="center" mx={0} h="calc(100% - 40px)" overflowY="auto"> */}
    {/* Gallery images */}
   
    {/* Add more images here */}
  {/* </Flex> */}
{/* </Box> */}
      {/* </Box> */}
   <Box
  className="section"
  width="30%"
  bgGradient="linear(to-r, pink.200, rgba(32, 22, 68, 0.7))"
  h="440px"
  borderRadius="10px"
  overflow="hidden"
  animation={{
    keyframes: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    duration: '1s',
    ease: 'ease-in',
  }} // Apply fade-in animation
>
  <Text as="h2" bg="white" fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
    GALLERY
  </Text>
  <Flex
    className="gallery"
    direction="column"
    alignItems="center"
    mx={0}
    h="calc(100% - 40px)"
    overflowY="auto"
  >
    {/* Gallery images */}
    <Image src={top1Image} alt="Image 1" mb={2} objectFit="cover" borderRadius="10px" />
    <Image src={top1Image} alt="Image 2" mb={2} objectFit="cover" borderRadius="10px" />
    <Image src={top1Image} alt="Image 3" mb={2} objectFit="cover" borderRadius="10px" />
    {/* Add more images here */}
  </Flex>
   </Box>

    </Box>

    </Container>


  )
}

export default HomePage
