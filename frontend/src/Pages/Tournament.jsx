// import React, { useState } from 'react'; // Import useState for managing state

// import {
//   Box,
//   IconButton,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerHeader,
//   DrawerBody,
//   Container,
//   List,
//   ListItem,
//   Text,
// } from '@chakra-ui/react';
// import { FaLinkedin, FaTwitter, FaGithub, FaBars } from 'react-icons/fa';
// //import { FaBars } from '@fortawesome/react-fontawesome';
// //import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Link } from 'react-router-dom';
// import top1Image from './top1.png';
// import top2Image from './lefttop.png';
// import top3Image from './topfull.png';

// const AboutPage = () => {
//   // Define state variables for drawer
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // Function to handle drawer toggle
//   const handleDrawerToggle = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <Container className='main' maxW="100%"> 
//       <Box
//         bg="gray.200"
//         p={8}
//         borderRadius="md"
//         ml={0}
//         alignSelf="flex-start"
//         position="absolute"
//         top={100}
//         left={600}
//         //right={50}
//       >
//         <IconButton
//           icon={<FaBars />}
//           aria-label="Toggle Navigation"
//           onClick={handleDrawerToggle}
//           mb={2}
//         />
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
//                     Option 2
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     Option 3
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     Option 4
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     Option 5
//                   </ListItem>
//                 </List>
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>
//         <Text fontSize="xl" color="red">
//           UNDER MAINTENANCE(Tournaments)
//         </Text>
//         <Text fontSize="lg" color="red">
//           Sorry for the inconvenience.
//         </Text>
//       </Box>
//     </Container>
//   );
// };

// export default AboutPage;




import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';
import Chessboard from 'chessboardjsx';
import {Chess}from 'chess.js'; // Import Chess from 'chess.js'
//import Chessboard from '../components/Chessboard';

const TournamentPage = () => {
//   const [game, setGame] = useState(new Chess());
//   const [fen, setFen] = useState('start');
//   const [message, setMessage] = useState('');
//   const [chatMessages, setChatMessages] = useState([]);

  const [game, setGame] = useState(new Chess('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')); // Initialize with a valid FEN string
  const [fen, setFen] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'); // Update the initial FEN state
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleMove = (move) => {
    const gameCopy = new Chess(fen); // Create a new instance of Chess
    const result = gameCopy.move(move);
    if (result) {
      setGame(gameCopy);
      setFen(gameCopy.fen());
    }
  };

  const handleMessageSubmit = () => {
    if (message.trim() !== '') {
      setChatMessages([...chatMessages, message.trim()]);
      setMessage('');
    }
  };

  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="6xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          <Box mr={{ md: 8 }} flex="1">
            <Heading as="h1" size="4xl" mb={6}>
              Online Tournament
            </Heading>
            <Chessboard
              position={fen}
              onDrop={handleMove}
              boardWidth={400}
              boardStyle={{
                borderRadius: '5px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
              }}
            />
          </Box>
  <div>
      <h1>My Chessboard</h1>
      <Chessboard
        position="start"
        width={400}
        draggable={true}
        onDrop={(sourceSquare, targetSquare) =>
          console.log(`Piece dropped from ${sourceSquare} to ${targetSquare}`)
        }
      />
    </div>

          <Box flex="1">
            <Heading as="h2" size="2xl" mb={4}>
              Chat
            </Heading>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md" mb={4}>
              {chatMessages.map((msg, index) => (
                <Text key={index} mb={2}>
                  {msg}
                </Text>
              ))}
            </Box>
            <InputGroup>
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                resize="none"
                rows={3}
                mr={2}
              />
              <InputRightElement>
                <Button colorScheme="blue" onClick={handleMessageSubmit}>
                  <FaPaperPlane />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default TournamentPage;



