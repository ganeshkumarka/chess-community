import axios from 'axios'
import React, { useEffect, useState } from 'react'


//import React from 'react'
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



const ChatPage = () => {


// const[chats,setChats]=useState([]);
//     const fetchChats = async()=>{
//         const {data} = await axios.get('/api/chat');
//         setChats(data);
//     };
    
//     useEffect(()=>{
//         fetchChats();
//     },[]);


//   return (
//     <div>
//         {chats.map((chat) => (
//           <div key={chat._id}>{chat.chatName}</div>
//         ))}
//         </div>
//   ); 

return(
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
      ><img src="" alt="img "style={{ width: '1450px', height: '500px' }} />
       <Tabs variant='soft-rounded' width="100%" position="absolute" top="140" left="1000" zIndex={2}>
        <TabList mb="1em" color="red" classname="tablist1">
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'white' }} ><Link to="/login">Login</Link></Tab>
          <Tab width="10%" _hover={{ bg: 'blue.500' }} bg="red" fontWeight="bold" fontSize="lg" style={{ color: 'white' }}><Link to="/signup">SignUp</Link></Tab>
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
    </Container>
)
};

export default ChatPage
