// import React from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   Stack,
//   Button,
//   useColorMode,
//   IconButton,
//   Grid,List,
//   ListItem,
// } from '@chakra-ui/react';
// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// const Members = () => {
//   const { colorMode } = useColorMode();
//   const cardBg = colorMode === 'light' ? 'white' : 'gray.800';
//   const textColor = colorMode === 'light' ? 'gray.600' : 'gray.400';

//   const members = [
//     {
//       name: 'John Doe',
//       role: 'President',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/johndoe',
//       twitter: 'https://twitter.com/johndoe',
//       github: 'https://github.com/johndoe',
//     },
//     {
//       name: 'Jane Smith',
//       role: 'Vice President',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/janesmith',
//       twitter: 'https://twitter.com/janesmith',
//       github: 'https://github.com/janesmith',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     // Add more members as needed
//   ];

//   return (
// <container classname='memberpage' maxw ="100%">
//   <Box
//         bg={colorMode === 'light' ? 'gray.200' : 'gray.800' }mt={4}
//         p={4}
//         mr={6}
//         borderRadius="md"
//         ml={0}
//       >
//         <Heading size="md" mb={4}>
//           NAVIGATE to
//         </Heading>
//         <List spacing={3}>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 1
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 2
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 3
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 4
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 5
//           </ListItem>
//         </List>
//       </Box>
//     <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} py={10} mt={4}>
//   <Box maxW="container.lg" mx="auto" px={6}>
//     <Heading mb={6} textAlign="center">
//       Our Team
//     </Heading>
//     <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//       {members.map((member, index) => (
//         <Flex
//           key={index}
//           bg={cardBg}
//           boxShadow="md"
//           rounded="lg"
//           p={4}
//           alignItems="center"
//           justifyContent="space-between"
//           flexDirection="column" // Align items vertically
//         >
//           <Flex alignItems="center" mb={2}>
//             <Avatar src={member.avatar} size="md" mr={2} />
//             <Box>
//               <Heading size="sm">{member.name}</Heading>
//               <Text color={textColor} fontSize="sm">{member.role}</Text>
//             </Box>
//           </Flex>
//           <Flex>
//             <IconButton
//               as="a"
//               href={member.linkedin}
//               target="_blank"
//               aria-label="LinkedIn"
//               icon={<FaLinkedin />}
//               variant="ghost"
//               colorScheme="linkedin"
//               mr={2}
//             />
//             <IconButton
//               as="a"
//               href={member.twitter}
//               target="_blank"
//               aria-label="Twitter"
//               icon={<FaTwitter />}
//               variant="ghost"
//               colorScheme="twitter"
//               mr={2}
//             />
//             <IconButton
//               as="a"
//               href={member.github}
//               target="_blank"
//               aria-label="GitHub"
//               icon={<FaGithub />}
//               variant="ghost"
//               colorScheme="gray"
//             />
//           </Flex>
//         </Flex>
//       ))}
//     </Grid>
//   </Box>
// </Box>
// </container>
    
//   );
// };

// export default Members;

//second one

// import React from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   IconButton,
//   useColorMode,
//   Grid,
//   List,
//   ListItem,
// } from '@chakra-ui/react';
// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// const Members = () => {
//   const { colorMode } = useColorMode();
//   const cardBg = colorMode === 'light' ? 'white' : 'gray.800';
//   const textColor = colorMode === 'light' ? 'gray.600' : 'gray.400';

//   const members = [
//     {
//       name: 'John Doe',
//       role: 'President',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/johndoe',
//       twitter: 'https://twitter.com/johndoe',
//       github: 'https://github.com/johndoe',
//     },
//     {
//       name: 'Jane Smith',
//       role: 'Vice President',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/janesmith',
//       twitter: 'https://twitter.com/janesmith',
//       github: 'https://github.com/janesmith',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//     {
//       name: 'Bob Johnson',
//       role: 'Secretary',
//       avatar: 'https://via.placeholder.com/150',
//       linkedin: 'https://www.linkedin.com/in/bobjohnson',
//       twitter: 'https://twitter.com/bobjohnson',
//       github: 'https://github.com/bobjohnson',
//     },
//   ];

//   return (
//     <Flex>
//       {/* Left side options */}
//       <Box
//         bg={colorMode === 'light' ? 'gray.200' : 'gray.800' }mt={4}
//         p={4}
//         mr={6}
//         borderRadius="md"
//         ml={0}
//       >
//         <Heading size="md" mb={4}>
//           NAVIGATE to
//         </Heading>
//         <List spacing={3}>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 1
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 2
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 3
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 4
//           </ListItem>
//           <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//             Option 5
//           </ListItem>
//         </List>
//       </Box>

//       {/* Members grid */}
//       <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} py={10} mt={4}>
//         <Box maxW="container.lg" mx="auto" px={6}>
//           <Heading mb={6} textAlign="center">
//             Our Team
//           </Heading>
//           <Grid templateColumns="repeat(3, 1fr)" gap={6}>
//             {members.map((member, index) => (
//               <Flex
//                 key={index}
//                 bg={cardBg}
//                 boxShadow="md"
//                 rounded="lg"
//                 p={4}
//                 alignItems="center"
//                 justifyContent="space-between"
//                 flexDirection="column" // Align items vertically
//               >
//                 <Flex alignItems="center" mb={2}>
//                   <Avatar src={member.avatar} size="md" mr={2} />
//                   <Box>
//                     <Heading size="sm">{member.name}</Heading>
//                     <Text color={textColor} fontSize="sm">
//                       {member.role}
//                     </Text>
//                   </Box>
//                 </Flex>
//                 <Flex>
//                   <IconButton
//                     as="a"
//                     href={member.linkedin}
//                     target="_blank"
//                     aria-label="LinkedIn"
//                     icon={<FaLinkedin />}
//                     variant="ghost"
//                     colorScheme="linkedin"
//                     mr={2}
//                   />
//                   <IconButton
//                     as="a"
//                     href={member.twitter}
//                     target="_blank"
//                     aria-label="Twitter"
//                     icon={<FaTwitter />}
//                     variant="ghost"
//                     colorScheme="twitter"
//                     mr={2}
//                   />
//                   <IconButton
//                     as="a"
//                     href={member.github}
//                     target="_blank"
//                     aria-label="GitHub"
//                     icon={<FaGithub />}
//                     variant="ghost"
//                     colorScheme="gray"
//                   />
//                 </Flex>
//               </Flex>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default Members;


//third one

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  IconButton,
  useColorMode,
  Grid,
  List,
  ListItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub, FaBars } from 'react-icons/fa';

const MembersPage = () => {
  const { colorMode } = useColorMode();
  const cardBg = colorMode === 'light' ? 'white' : 'gray.800';
  const textColor = colorMode === 'light' ? 'gray.600' : 'gray.400';

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const members = [
    {
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },
   {
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },{
      name: 'NAME',
      role: 'DESIGNATION',
      avatar: 'https://via.placeholder.com/150',
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe',
    },
    // Add more members as needed
  ];


  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Flex direction="column" h="100vh">
      <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.700'} py={10} mt={4}>
        <Box maxW="container.lg" mx="auto" px={6}>
          <Heading mb={6} textAlign="center">
            Our Team
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {members.map((member, index) => (
              <Flex
                key={index}
                bg={cardBg}
                boxShadow="md"
                rounded="lg"
                p={4}
                alignItems="center"
                justifyContent="space-between"
                flexDirection="column" // Align items vertically
              >
                <Flex alignItems="center" mb={2}>
                  <Avatar src={member.avatar} size="md" mr={2} />
                  <Box>
                    <Heading size="sm">{member.name}</Heading>
                    <Text color={textColor} fontSize="sm">
                      {member.role}
                    </Text>
                  </Box>
                </Flex>
                <Flex>
                  <IconButton
                    as="a"
                    href={member.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    variant="ghost"
                    colorScheme="linkedin"
                    mr={2}
                  />
                  <IconButton
                    as="a"
                    href={member.twitter}
                    target="_blank"
                    aria-label="Twitter"
                    icon={<FaTwitter />}
                    variant="ghost"
                    colorScheme="twitter"
                    mr={2}
                  />
                  <IconButton
                    as="a"
                    href={member.github}
                    target="_blank"
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    variant="ghost"
                    colorScheme="gray"
                  />
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        bg={colorMode === 'light' ? 'gray.200' : 'gray.800'}
        p={4}
        borderRadius="md"
        ml={0}
        alignSelf="flex-start"
        position="absolute"
        top={5}
        left={5}
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
                    <Link to="/home">Discussion Forum</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/home">Tournaments</Link>
                  </ListItem>
                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/home">Achievements</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/home">News</Link>
                  </ListItem>
                  <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                    <Link to="/about">About Us</Link>
                  </ListItem>
                </List>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default MembersPage;


