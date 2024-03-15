// // import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
// // import React, { useState } from 'react'

// // const Login = () => {
// //     const [show, setShow] = React.useState(false);

// //     const [email,setEmail]=useState();
// //     const [password,setPassword]=useState();
  
// //     const handleClick = () => setShow(!show);
// //     const submitHandler = () => {}

// //   return (
// //     <VStack spacing='5px' color='black'>

// //       <FormControl id='email' isrequired>
// //         <FormLabel>Email</FormLabel>
// //             <Input  
// //                 placeholder='Enter your Email' 
// //                 onChange={(e) => setEmail(e.target.value)}
// //             />       
// //       </FormControl>

// //       <FormControl id='password' isrequired>
// //         <FormLabel>Password</FormLabel>
// //             <InputGroup>
// //                 <Input 
// //                   type={show ? "text" : "password"}
// //                   placeholder='Enter your password' 
// //                   onChange={(e) => setPassword(e.target.value)}
// //             />       
// //             <InputRightElement>
// //                 <Button h="1.75rem" size="sm" onClick={handleClick}>
// //                     {show ? "Hide" : "Show"}
// //                 </Button>
// //             </InputRightElement>
// //             </InputGroup>         
// //       </FormControl>

// //         <Button  
// //             colorScheme="blue"
// //             width="100%"
// //             style={{marginTop:'15px'}}
// //             onClick={submitHandler}
// //         >
// //            Login
// //         </Button>
            
// //         <Button 
// //             variant = "solid"
// //             colorScheme ="red" 
// //             width="100%"
// //             onClick={() => {
// //                 setEmail("guest@example.com");
// //                 setPassword("123456");
// //             }}
// //         >
// //             Get Guest User Credentials
// //         </Button>
// //     </VStack>
// //   );
// // };

// // export default Login


// // import React, { useState } from 'react';
// // import {
// //   Box,
// //   Button,
// //   FormControl,
// //   FormLabel,
// //   Input,
// //   InputGroup,
// //   InputRightElement,
// //   VStack,
// // } from '@chakra-ui/react';

// // const Login = () => {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const togglePasswordVisibility = () => setShowPassword(!showPassword);

// //   const handleSubmit = () => {
// //     // Your login logic goes here
// //     console.log('Logging in...');
// //   };

// //   return (
// //     <Box
// //       w="100%"
// //       maxW="400px"
// //       mx="auto"
// //       mt="8"
// //       p="6"
// //       bg="white"
// //       boxShadow="md"
// //       borderRadius="md"
// //     >
// //       <VStack spacing="6">
// //         <FormControl id="email" isRequired>
// //           <FormLabel>Email</FormLabel>
// //           <Input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </FormControl>

// //         <FormControl id="password" isRequired>
// //           <FormLabel>Password</FormLabel>
// //           <InputGroup>
// //             <Input
// //               type={showPassword ? 'text' : 'password'}
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <InputRightElement width="3rem">
// //               <Button h="1.5rem" size="sm" onClick={togglePasswordVisibility}>
// //                 {showPassword ? 'Hide' : 'Show'}
// //               </Button>
// //             </InputRightElement>
// //           </InputGroup>
// //         </FormControl>

// //         <Button
// //           colorScheme="blue"
// //           width="100%"
// //           onClick={handleSubmit}
// //         >
// //           Login
// //         </Button>

// //         <Button
// //           variant="outline"
// //           colorScheme="gray"
// //           width="100%"
// //           onClick={() => {
// //             setEmail('guest@example.com');
// //             setPassword('123456');
// //           }}
// //         >
// //           Use Guest Credentials
// //         </Button>
// //       </VStack>
// //     </Box>
// //   );
// // };

// // export default Login;

// // Login.js
// //import AuthService from 'frontend\src\services\AuthService.js';


// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// import { 
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputRightElement,
//   VStack,
// } from '@chakra-ui/react';
// import AuthService from 'C:/Desktop/samplec/frontend/src/services/AuthService.js';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState('');
//   const history = useHistory();
//   const [redirect, setRedirect] = useState(false);
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', { email, password });
//       if (response.status === 200) {
//         console.log('Login successful');
//         setLoggedIn(true);
//         // Redirect to the desired page after successful login
//       }
//     } catch (error) {
//       console.error(error);
//       setError('Invalid email or password');
//     }
//   };

//   if (loggedIn) {
//     // Redirect to the desired page after successful login
//     return <Redirect to="/UserPage" />;
//   }

//     // async function handleSubmit() (e){
//     //     e.preventDefault();
//     //     try{

//     //         await.post("http://localhosst:3000/",{
//     //             email.password
//     //         })
//     //     }
//     // }  catch(0){
//     //     console.log(e);
//     // }




//   return (
//     <Box
//       w="100%"
//       maxW="400px"
//       mx="auto"
//       mt="8"
//       p="6"
//       bg="white"
//       boxShadow="md"
//       borderRadius="md"
//     >
//       <VStack spacing="6">
//         <FormControl id="email" isRequired>
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormControl>

//         <FormControl id="password" isRequired>
//           <FormLabel>Password</FormLabel>
//           <InputGroup>
//             <Input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </InputGroup>
//         </FormControl>

//         <Button
//           colorScheme="blue"
//           width="100%"
//           onClick={handleSubmit}
//         >
//           Login
//         </Button>
//         <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Don't have an account?  <Link to="/signup" style={{ color: 'red', textDecoration: 'underline' }}>Sign up</Link></p>
//         {error && <Box color="red.500">{error}</Box>}
//       </VStack>
//     </Box>
//   );
// };

// export default Login;




//second one

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, FormControl, FormLabel, Input, VStack, InputGroup, InputRightElement } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.status === 200) {
        console.log('Login successful');
        setLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

 if (loggedIn) {
  return <Redirect to={`/UserPage/${email}`} />;
}


  return (
    <Box
      w="100%"
      maxW="400px"
      mx="auto"
      mt="8"
      p="6"
      bg="white"
      boxShadow="md"
      borderRadius="md"
    >
      <VStack spacing="6">
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="3rem">
              <Button h="1.5rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Don't have an account? <Link to="/signup" style={{ color: 'red', textDecoration: 'underline' }}>Sign up</Link></p>
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Back to home<Link to="/" style={{ color: 'red', textDecoration: 'underline' }}>home</Link></p>
        {error && <Box color="red.500">{error}</Box>}
      </VStack>
    </Box>
  );
};

export default Login;
