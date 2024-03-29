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

// const Achievements = () => {
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
//           UNDER MAINTENANCE(Achievements)
//         </Text>
//         <Text fontSize="lg" color="red">
//           Sorry for the inconvenience.
//         </Text>
//       </Box>
//     </Container>
//   );
// };

// export default Achievements;

import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const AchievementsPage = () => {
  return (
    <Box bg="gray.100" py={16} mt={10}>
      <Container maxW="6xl">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
          <Box mr={{ md: 8 }}>
            <Heading as="h1" size="4xl" mb={6}>
              Our Achievements
            </Heading>
            <Text fontSize="lg" mb={8}>
              Our community has achieved remarkable milestones and successes over the years. We are proud to share some of our most notable achievements:
            </Text>
            <UnorderedList spacing={4} fontSize="lg">
              <ListItem>
                <strong>Tournament Victories:</strong> Our members have won numerous regional and national chess tournaments, showcasing their exceptional skills and dedication.
              </ListItem>
              <ListItem>
                <strong>Community Outreach:</strong> We have organized and participated in various community events, promoting chess and introducing the game to new audiences.
              </ListItem>
              <ListItem>
                <strong>Online Presence:</strong> Our online community has grown significantly, with thousands of active members engaging in discussions, sharing insights, and participating in virtual tournaments.
              </ListItem>
              <ListItem>
                <strong>Youth Development:</strong> Our youth programs have nurtured and supported young chess talents, helping them develop their skills and fostering a love for the game.
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default AchievementsPage;
