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
//                     <Link to="/members">Members</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/">Discussion</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/achievements">Achievements</Link>
//                   </ListItem>
//                   <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
//                     <Link to="/news">News</Link>
//                   </ListItem>
//                 </List>
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>
//         <Text fontSize="xl" color="red">
//           UNDER MAINTENANCE(ABOUT)
//         </Text>
//         <Text fontSize="lg" color="red">
//           Sorry for the inconvenience.
//         </Text>
//       </Box>
//     </Container>
//   );
// };

// export default AboutPage;



import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Section = styled.section`
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #555;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`;

const AboutPage = () => {
  return (
     <>
      <Header>
        <Title>Chess Community</Title>
      </Header>

      <Container>
        <Section>
          <SubTitle>About Us</SubTitle>
          <Paragraph>
            Welcome to our vibrant chess community! We are a passionate group of chess enthusiasts dedicated to fostering a love for the game and providing a platform for players of all levels to connect, learn, and grow.
          </Paragraph>
          <Paragraph>
            Founded in 2020, our community was born out of a shared desire to create a space where chess lovers could come together, exchange ideas, and challenge each other in friendly matches. Since then, we have grown into a thriving community with members from all over the world.
          </Paragraph>
          <Paragraph>
            Our mission is to promote the art of chess, celebrate its rich history, and inspire a new generation of players. Whether you're a seasoned grandmaster or a beginner just starting your journey, our community is here to support you every step of the way.
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Our Values</SubTitle>
          <Paragraph>At the heart of our community lie the following core values:</Paragraph>
          <ul>
            <li>
              <strong>Inclusivity:</strong> We welcome chess players of all ages, backgrounds, and skill levels, fostering an environment of mutual respect and camaraderie.
            </li>
            <li>
              <strong>Learning:</strong> We believe in continual growth and encourage members to share their knowledge, strategies, and insights to help each other improve.
            </li>
            <li>
              <strong>Sportsmanship:</strong> We promote fair play, ethical conduct, and a love for the game above all else.
            </li>
            <li>
              <strong>Community:</strong> We strive to create a supportive and engaging environment where members can connect, collaborate, and form lasting friendships.
            </li>
          </ul>
        </Section>
      </Container>

      <Footer>
        <Paragraph>&copy; 2024 Chess Community. All rights reserved.</Paragraph>
      </Footer>
    </>
  );
};

export default AboutPage;