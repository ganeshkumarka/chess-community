// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   Input,
//   Button,
//   Textarea,
//   Spinner,
//   useToast,
//   IconButton,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { FaEdit, FaTrash } from 'react-icons/fa';

// const DiscussionForum = ({ userId }) => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');
//   const [editingPost, setEditingPost] = useState(null);
//   const [editedContent, setEditedContent] = useState('');
//   const [loading, setLoading] = useState(true);
//   const toast = useToast();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('/api/posts');
//         setPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         toast({
//           title: 'Error',
//           description: 'Failed to fetch posts',
//           status: 'error',
//           duration: 5000,
//           isClosable: true,
//         });
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [toast]);

//   const handlePostSubmit = async (e) => {
//     e.preventDefault();
//     if (!newPost.trim()) return;

//     try {
//       const response = await axios.post('/api/posts', { content: newPost, authorId: userId });
//       setPosts([...posts, response.data]);
//       setNewPost('');
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to create post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePostDelete = async (postId) => {
//     try {
//       await axios.delete(`/api/posts/${postId}`);
//       setPosts(posts.filter((post) => post._id !== postId));
//       toast({
//         title: 'Success',
//         description: 'Post deleted',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePostUpdate = async (postId) => {
//     try {
//       const response = await axios.put(`/api/posts/${postId}`, { content: editedContent });
//       setPosts(posts.map((post) => (post._id === postId ? response.data : post)));
//       setEditingPost(null);
//       setEditedContent('');
//       toast({
//         title: 'Success',
//         description: 'Post updated',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="container.lg" mx="auto" py={8}>
//       <Heading mb={6}>Discussion Forum</Heading>
//       <Box mb={4}>
//         <form onSubmit={handlePostSubmit}>
//           <Flex>
//             <Textarea
//               value={newPost}
//               onChange={(e) => setNewPost(e.target.value)}
//               placeholder="Write a new post..."
//               size="md"
//               mr={2}
//             />
//             <Button type="submit" colorScheme="blue">
//               Post
//             </Button>
//           </Flex>
//         </form>
//       </Box>
//       {loading ? (
//         <Flex justify="center">
//           <Spinner size="xl" />
//         </Flex>
//       ) : (
//         posts.map((post) => (
//           <Box key={post._id} bg="gray.100" p={4} mb={4} borderRadius="md">
//             <Flex alignItems="center" mb={2}>
//               <Avatar size="sm" mr={2} />
//               <Text fontWeight="bold">{post.author.name}</Text>
//             </Flex>
//             {editingPost === post._id ? (
//               <Flex>
//                 <Textarea
//                   value={editedContent}
//                   onChange={(e) => setEditedContent(e.target.value)}
//                   placeholder="Edit post..."
//                   size="md"
//                   mr={2}
//                 />
//                 <Button colorScheme="green" mr={2} onClick={() => handlePostUpdate(post._id)}>
//                   Save
//                 </Button>
//                 <Button colorScheme="red" onClick={() => setEditingPost(null)}>
//                   Cancel
//                 </Button>
//               </Flex>
//             ) : (
//               <>
//                 <Text>{post.content}</Text>
//                 <Flex mt={2} justify="flex-end">
//                   <IconButton
//                     aria-label="Edit Post"
//                     icon={<FaEdit />}
//                     colorScheme="blue"
//                     mr={2}
//                     onClick={() => {
//                       setEditingPost(post._id);
//                       setEditedContent(post.content);
//                     }}
//                   />
//                   <IconButton
//                     aria-label="Delete Post"
//                     icon={<FaTrash />}
//                     colorScheme="red"
//                     onClick={() => handlePostDelete(post._id)}
//                   />
//                 </Flex>
//               </>
//             )}
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default DiscussionForum;



//new one
// Frontend Component: DiscussionForum.jsx

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Avatar,
//   Input,
//   Button,
//   Textarea,
//   Spinner,
//   useToast,
//   IconButton,
// } from '@chakra-ui/react';
// import axios from 'axios';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';

// const DiscussionForum = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');
//   const [editingPost, setEditingPost] = useState(null);
//   const [editedContent, setEditedContent] = useState('');
//   const [loading, setLoading] = useState(true);
//   const toast = useToast();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // const response = await axios.get(`/api/user/${email}/posts`);
//         // setUserData(response.data.user);
//         {console.log(email)}
//         const response = await axios.get(`/api/user/${email}/posts`);
        
//         setPosts(response.data);
//         setLoading(false);
//       } catch (error) {
//         toast({
//           title: 'Error',
//           description: 'Failed to fetch posts',
//           status: 'error',
//           duration: 5000,
//           isClosable: true,
//         });
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [email, toast]);

//   const handlePostSubmit = async (e) => {
//     e.preventDefault();
//     if (!newPost.trim()) return;

//    app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
//     res.json(posts);
//     setPosts([...posts, response.data]);
//       setNewPost('');
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
//   };





//   const handlePostDelete = async (postId) => {
//     try {
//       await axios.delete(`/api/posts/${postId}`);
//       setPosts(posts.filter((post) => post._id !== postId));
//       toast({
//         title: 'Success',
//         description: 'Post deleted',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePostUpdate = async (postId) => {
//     try {
//       const response = await axios.put(`/api/posts/${postId}`, { content: editedContent });
//       setPosts(posts.map((post) => (post._id === postId ? response.data : post)));
//       setEditingPost(null);
//       setEditedContent('');
//       toast({
//         title: 'Success',
//         description: 'Post updated',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="container.lg" mx="auto" py={8}>
//       <Heading mb={6}>Discussion Forum</Heading>
//       <Box mb={4}>
//         <form onSubmit={handlePostSubmit}>
//           <Flex>
//             <Textarea
//               value={newPost}
//               onChange={(e) => setNewPost(e.target.value)}
//               placeholder="Write a new post..."
//               size="md"
//               mr={2}
//             />
//             <Button type="submit" colorScheme="blue">
//               Post
//             </Button>
//           </Flex>
//         </form>
//       </Box>
//       {loading ? (
//         <Flex justify="center">
//           <Spinner size="xl" />
//         </Flex>
//       ) : (
//         posts.map((post) => (
//           <Box key={post._id} bg="gray.100" p={4} mb={4} borderRadius="md">
//             <Flex alignItems="center" mb={2}>
//               <Avatar size="sm" mr={2} />
//               <Text fontWeight="bold">{post.author.name}</Text>
//             </Flex>
//             {editingPost === post._id ? (
//               <Flex>
//                 <Textarea
//                   value={editedContent}
//                   onChange={(e) => setEditedContent(e.target.value)}
//                   placeholder="Edit post..."
//                   size="md"
//                   mr={2}
//                 />
//                 <Button colorScheme="green" mr={2} onClick={() => handlePostUpdate(post._id)}>
//                   Save
//                 </Button>
//                 <Button colorScheme="red" onClick={() => setEditingPost(null)}>
//                   Cancel
//                 </Button>
//               </Flex>
//             ) : (
//               <>
//                 <Text>{post.content}</Text>
//                 <Flex mt={2} justify="flex-end">
//                   <IconButton
//                     aria-label="Edit Post"
//                     icon={<FaEdit />}
//                     colorScheme="blue"
//                     mr={2}
//                     onClick={() => {
//                       setEditingPost(post._id);
//                       setEditedContent(post.content);
//                     }}
//                   />
//                   <IconButton
//                     aria-label="Delete Post"
//                     icon={<FaTrash />}
//                     colorScheme="red"
//                     onClick={() => handlePostDelete(post._id)}
//                   />
//                 </Flex>
//               </>
//             )}
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default DiscussionForum;




//claude

// import React, { useState, useEffect } from 'react';
// import { Box, Flex, Heading, Text, Avatar, Input, Button, Textarea, Spinner, useToast, IconButton } from '@chakra-ui/react';
// import axios from 'axios';
// import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm';

// const DiscussionForum = () => {
//   const [userData, setUserData] = useState(null);
//   const { email } = useParams();
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');
//   const [editingPost, setEditingPost] = useState(null);
//   const [editedContent, setEditedContent] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortOrder, setSortOrder] = useState('desc');
//   const toast = useToast();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log(email)
//         const userResponse = await axios.get(`/api/user/${email}`);
//         //console.log(userResponse)
//         setUserData(userResponse.data);
//         const postsResponse = await axios.get(`/api/posts?page=${currentPage}&sortOrder=${sortOrder}&searchTerm=${searchTerm}`);
//         setPosts(postsResponse.data.posts);
//         setLoading(false);
//       } catch (error) {
//         toast({
//           title: 'Error',
//           description: 'Failed to fetch data',
//           status: 'error',
//           duration: 5000,
//           isClosable: true,
//         });
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [email, currentPage, sortOrder, searchTerm, toast]);

//   const handlePostSubmit = async (e) => {
//     e.preventDefault();
//     if (!newPost.trim()) return;

//     try {
//       // console.log(userData);
//       const response = await axios.post('/api/posts', { content: newPost, author: userData.userId });
//       setPosts([...posts, response.data]);
//       setNewPost('');
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to create post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePostDelete = async (postId) => {
//     try {
//       await axios.delete(`/api/posts/${postId}`);
//       setPosts(posts.filter((post) => post._id !== postId));
//       toast({
//         title: 'Success',
//         description: 'Post deleted',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to delete post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handlePostUpdate = async (postId) => {
//     try {
//       const response = await axios.put(`/api/posts/${postId}`, { content: editedContent });
//       setPosts(posts.map((post) => (post._id === postId ? response.data : post)));
//       setEditingPost(null);
//       setEditedContent('');
//       toast({
//         title: 'Success',
//         description: 'Post updated',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update post',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleVote = async (postId, voteType) => {
//     try {
//       await axios.post(`/api/votes`, { post: postId, user: userData._id, vote: voteType });
//       const updatedPosts = posts.map((post) => {
//         if (post._id === postId) {
//           const currentVote = post.votes.find((vote) => vote.user === userData._id);
//           if (currentVote) {
//             if (currentVote.vote === voteType) {
//               post.votes = post.votes.filter((vote) => vote.user !== userData._id);
//             } else {
//               post.votes = post.votes.map((vote) => (vote.user === userData._id ? { ...vote, vote: voteType } : vote));
//             }
//           } else {
//             post.votes.push({ user: userData._id, vote: voteType });
//           }
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to vote',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleReplySubmit = async (postId, replyContent) => {
//     try {
//       const response = await axios.post('/api/replies', { content: replyContent, post: postId, author: userData._id });
//       const updatedPosts = posts.map((post) => {
//         if (post._id === postId) {
//           post.replies.push(response.data);
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to submit reply',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleProfileUpdate = async (updatedUserData) => {
//     try {
//       const response = await axios.put(`/api/users/${userData._id}`, updatedUserData);
//       setUserData(response.data);
//       toast({
//         title: 'Success',
//         description: 'Profile updated',
//         status: 'success',
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (error) {
//       toast({
//         title: 'Error',
//         description: 'Failed to update profile',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <Box maxW="container.lg" mx="auto" py={8}>
//       <Heading mb={6}>Discussion Forum</Heading>
//       {userData && (
//         <Flex mb={4} alignItems="center">
//           <Avatar size="md" mr={2} src={userData.pic} />
//           <Text fontWeight="bold">{userData.name}</Text>
//           <Button ml={2} colorScheme="blue" onClick={() => handleProfileUpdate({ name: 'New Name', pic: 'https://example.com/new-pic.jpg' })}>
//             Update Profile
//           </Button>
//         </Flex>
//       )}
//       <Box mb={4}>
//         <form onSubmit={handlePostSubmit}>
//           <Flex>
//             <Textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="Write a new post..." size="md" mr={2} />
//             <Button type="submit" colorScheme="blue">
//               Post
//             </Button>
//           </Flex>
//         </form>
//       </Box>
//       <Flex mb={4} alignItems="center">
//         <Input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search posts..." mr={2} />
//         <Button colorScheme="blue" onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}>
//           Sort {sortOrder === 'desc' ? 'Ascending' : 'Descending'}
//         </Button>
//       </Flex>
//       {loading ? (
//         <Flex justify="center">
//           <Spinner size="xl" />
//         </Flex>
//       ) : (
//         <>
//           {posts.map((post) => (
//             <Box key={post._id} bg="gray.100" p={4} mb={4} borderRadius="md">
//               <Flex alignItems="center" mb={2}>
//                 <Avatar size="sm" mr={2} src={post.author.pic} />
//                 <Text fontWeight="bold">{post.author.name}</Text>
//               </Flex>
//               {editingPost === post._id ? (
//                 <Flex>
//                   <Textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} placeholder="Edit post..." size="md" mr={2} />
//                   <Button colorScheme="green" mr={2} onClick={() => handlePostUpdate(post._id)}>
//                     Save
//                   </Button>
//                   <Button colorScheme="red" onClick={() => setEditingPost(null)}>
//                     Cancel
//                   </Button>
//                 </Flex>
//               ) : (
//                 <>
//                   <ReactMarkdown remarkPlugins={[gfm]}>{post.content}</ReactMarkdown>
//                   <Flex mt={2} justify="flex-end">
//                     <IconButton
//                       aria-label="Upvote Post"
//                       icon={<FaThumbsUp />}
//                       colorScheme={post.votes.some((vote) => vote.user === userData._id && vote.vote === 1) ? 'green' : 'gray'}
//                       mr={2}
//                       onClick={() => handleVote(post._id, 1)}
//                     />
//                     <Text mr={2}>{post.votes.filter((vote) => vote.vote === 1).length}</Text>
//                     <IconButton
//                       aria-label="Downvote Post"
//                       icon={<FaThumbsDown />}
//                       colorScheme={post.votes.some((vote) => vote.user === userData._id && vote.vote === -1) ? 'red' : 'gray'}
//                       mr={2}
//                       onClick={() => handleVote(post._id, -1)}
//                     />
//                     <Text mr={2}>{post.votes.filter((vote) => vote.vote === -1).length}</Text>
//                     {userData && post.author._id === userData._id && (
//                       <>
//                         <IconButton
//                           aria-label="Edit Post"
//                           icon={<FaEdit />}
//                           colorScheme="blue"
//                           mr={2}
//                           onClick={() => {
//                             setEditingPost(post._id);
//                             setEditedContent(post.content);
//                           }}
//                         />
//                         <IconButton aria-label="Delete Post" icon={<FaTrash />} colorScheme="red" onClick={() => handlePostDelete(post._id)} />
//                       </>
//                     )}
//                   </Flex>
//                   <Box mt={4}>
//                     <Heading size="sm" mb={2}>
//                       Replies
//                     </Heading>
//                     {post.replies.map((reply) => (
//                       <Box key={reply._id} bg="gray.200" p={2} mb={2} borderRadius="md">
//                         <Flex alignItems="center" mb={2}>
//                           <Avatar size="xs" mr={2} src={reply.author.pic} />
//                           <Text fontWeight="bold">{reply.author.name}</Text>
//                         </Flex>
//                         <ReactMarkdown remarkPlugins={[gfm]}>{reply.content}</ReactMarkdown>
//                       </Box>
//                     ))}
//                     <form onSubmit={(e) => { e.preventDefault(); handleReplySubmit(post._id, e.target.reply.value); e.target.reply.value = ''; }}>
//                       <Flex>
//                         <Input name="reply" placeholder="Write a reply..." mr={2} />
//                         <Button type="submit" colorScheme="blue">
//                           Reply
//                         </Button>
//                       </Flex>
//                     </form>
//                   </Box>
//                 </>
//               )}
//             </Box>
//           ))}
//           <Flex justify="center" mt={4}>
//             <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
//               Previous
//             </Button>
//             <Text mx={2}>{currentPage}</Text>
//             <Button onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
//           </Flex>
//         </>
//       )}
//     </Box>
//   );
// };

// export default DiscussionForum;