// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react'

// const Login = () => {
//     const [show, setShow] = React.useState(false);

//     const [email,setEmail]=useState();
//     const [password,setPassword]=useState();
  
//     const handleClick = () => setShow(!show);
//     const submitHandler = () => {}

//   return (
//     <VStack spacing='5px' color='black'>

//       <FormControl id='email' isrequired>
//         <FormLabel>Email</FormLabel>
//             <Input  
//                 placeholder='Enter your Email' 
//                 onChange={(e) => setEmail(e.target.value)}
//             />       
//       </FormControl>

//       <FormControl id='password' isrequired>
//         <FormLabel>Password</FormLabel>
//             <InputGroup>
//                 <Input 
//                   type={show ? "text" : "password"}
//                   placeholder='Enter your password' 
//                   onChange={(e) => setPassword(e.target.value)}
//             />       
//             <InputRightElement>
//                 <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {show ? "Hide" : "Show"}
//                 </Button>
//             </InputRightElement>
//             </InputGroup>         
//       </FormControl>

//         <Button  
//             colorScheme="blue"
//             width="100%"
//             style={{marginTop:'15px'}}
//             onClick={submitHandler}
//         >
//            Login
//         </Button>
            
//         <Button 
//             variant = "solid"
//             colorScheme ="red" 
//             width="100%"
//             onClick={() => {
//                 setEmail("guest@example.com");
//                 setPassword("123456");
//             }}
//         >
//             Get Guest User Credentials
//         </Button>
//     </VStack>
//   );
// };

// export default Login


import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = () => {
    // Your login logic goes here
    console.log('Logging in...');
  };

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
              <Button h="1.5rem" size="sm" onClick={togglePasswordVisibility}>
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

        <Button
          variant="outline"
          colorScheme="gray"
          width="100%"
          onClick={() => {
            setEmail('guest@example.com');
            setPassword('123456');
          }}
        >
          Use Guest Credentials
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
