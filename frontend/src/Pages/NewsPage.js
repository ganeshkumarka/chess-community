// import React from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   Stack,
//   useColorModeValue,
//   Link,
//   Icon,
// } from '@chakra-ui/react';
// import { FaChessBoard, FaNewspaper } from 'react-icons/fa';

// const Navigation = () => {
//   const menuItems = [
//     { label: 'Members', icon: FaChessBoard, href: '/members' },
//     { label: 'News', icon: FaNewspaper, href: '/news' },
//     // Add more menu items as needed
//   ];

//   return (
//     <Flex
//       bg={useColorModeValue('gray.100', 'gray.700')}
//       py={4}
//       px={6}
//       alignItems="center"
//       justifyContent="space-between"
//     >
//       <Heading size="md">CUSAT Chess Community</Heading>
//       <Flex alignItems="center">
//         {menuItems.map((item, index) => (
//           <Link
//             key={index}
//             href={item.href}
//             display="flex"
//             alignItems="center"
//             mr={6}
//             _hover={{ textDecoration: 'none' }}
//           >
//             <Icon as={item.icon} mr={2} />
//             <Text>{item.label}</Text>
//           </Link>
//         ))}
//       </Flex>
//     </Flex>
//   );
// };

// const NewsPage = () => {
//   const cardBg = useColorModeValue('white', 'gray.800');
//   const textColor = useColorModeValue('gray.600', 'gray.400');

//   const newsItems = [
//     {
//       title: 'Upcoming Chess Tournament',
//       date: 'May 15, 2023',
//       author: 'John Doe',
//       content:
//         'The CUSAT Chess Community is excited to announce our upcoming chess tournament. The event will take place on May 15, 2023, at the university campus. All members are encouraged to participate and showcase their skills.',
//     },
//     {
//       title: 'New Chess Club President Elected',
//       date: 'April 1, 2023',
//       author: 'Jane Smith',
//       content:
//         'After a closely contested election, we are pleased to announce that Jane Smith has been elected as the new president of the CUSAT Chess Club. We wish her all the best in her new role.',
//     },
//     // Add more news items as needed
//   ];

//   return (
//     <Box>
//       <Navigation />
//       <Box bg={useColorModeValue('gray.100', 'gray.700')} py={10}>
//         <Box maxW="container.lg" mx="auto" px={6}>
//           <Heading mb={6} textAlign="center">
//             News
//           </Heading>
//           <Stack spacing={8}>
//             {newsItems.map((news, index) => (
//               <Flex
//                 key={index}
//                 bg={cardBg}
//                 boxShadow="md"
//                 rounded="lg"
//                 p={6}
//                 alignItems="flex-start"
//                 justifyContent="space-between"
//                 flexDirection="column"
//               >
//                 <Flex alignItems="center" mb={4}>
//                   <Avatar size="sm" mr={2} />
//                   <Text color={textColor} fontSize="sm">
//                     {news.author} | {news.date}
//                   </Text>
//                 </Flex>
//                 <Heading size="md" mb={2}>
//                   {news.title}
//                 </Heading>
//                 <Text color={textColor}>{news.content}</Text>
//               </Flex>
//             ))}
//           </Stack>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default NewsPage;

//second one
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  Stack,
  useColorModeValue,
  Button,
  Spinner,
  Fade,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Link ,Icon
} from '@chakra-ui/react';
import { FaBars,FaHome } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

// In the JSX:
<Icon as={AiOutlineHome} />


//import { Link } from 'react-router-dom';
const Navigation = ({ handleDrawerToggle }) => {
  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.800')}
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
    </Box>
  );
};

const NewsPage = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const [newsItems, setNewsItems] = useState([
    {
      title: 'Upcoming Chess Tournament',
      date: 'May 15, 2023',
      author: 'John Doe',
      content:
        'The CUSAT Chess Community is excited to announce our upcoming chess tournament. The event will take place on May 15, 2023, at the university campus. All members are encouraged to participate and showcase their skills.',
    },
    {
      title: 'New Chess Club President Elected',
      date: 'April 1, 2023',
      author: 'Jane Smith',
      content:
        'After a closely contested election, we are pleased to announce that Jane Smith has been elected as the new president of the CUSAT Chess Club. We wish her all the best in her new role.',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const loadMoreNews = () => {
    setLoading(true);
    setTimeout(() => {
      const newNews = Array.from({ length: 10 }, (_, index) => ({
        title: `News Item ${newsItems.length + index + 1}`,
        date: new Date().toDateString(),
        author: 'Chess Community',
        content: 'This is a sample news item.',
      }));
      setNewsItems((prevNews) => [...prevNews, ...newNews].slice(0, 10)); // Limiting news to maximum of 10
      setLoading(false);
    }, 1000);
  };

  return (
    <Box mt={6}>
      <Navigation handleDrawerToggle={handleDrawerToggle} />
      <Drawer placement="left" onClose={handleDrawerToggle} isOpen={isDrawerOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>NAVIGATE TO</DrawerHeader>
            <DrawerBody>
              <List spacing={3}>
                <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                   <Icon as={FaHome} /><Link to="/">Home</Link>
                </ListItem>
                <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                   <Link to="/">Discussion Forum</Link>
                </ListItem>
                <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                   <Link to="/tournaments">Tournaments</Link>
                </ListItem>
                <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                   <Link to="/achievements">Achievements</Link>
                </ListItem>
                <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>
                  <Link to="/about">AboutUs</Link>
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      <Box bg={useColorModeValue('gray.100', 'gray.700')} py={10}>
        <Box maxW="container.lg" mx="auto" px={6}>
          <Heading mb={6} textAlign="center">
            News
          </Heading>
          <Stack spacing={8}>
            {newsItems.map((news, index) => (
              <Fade in key={index}>
                <Flex
                  bg={cardBg}
                  boxShadow="md"
                  rounded="lg"
                  p={6}
                  alignItems="flex-start"
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Flex alignItems="center" mb={4}>
                    <Avatar size="sm" mr={2} />
                    <Text color={textColor} fontSize="sm">
                      {news.author} | {news.date}
                    </Text>
                  </Flex>
                  <Heading size="md" mb={2}>
                    {news.title}
                  </Heading>
                  <Text color={textColor}>{news.content}</Text>
                </Flex>
              </Fade>
            ))}
          </Stack>
          <Flex justifyContent="center" mt={8}>
            <Button
              colorScheme="blue"
              onClick={loadMoreNews}
              isLoading={loading}
              disabled={loading || newsItems.length >= 10} // Disable button when maximum news reached
            >
              {loading ? <Spinner size="sm" mr={2} /> : null}
              Load More News
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsPage;
