// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react';

// const SignUp = () => {
//     const [show, setShow] = React.useState(false);
//     const [name,setName]=useState();
//     const [email,setEmail]=useState();
//     const [password,setPassword]=useState();
//     const [confirmpassword,setConfirmPassword]=useState();
//     const [pic,setPic]=useState();
//     const handleClick = () => setShow(!show);
//     const postDetails = (pics) => {}
//     const submitHandler = () => {}

//   return (
//     <VStack spacing='5px' color='black'>
//       <FormControl id='first-name' isrequired>
//         <FormLabel>Name</FormLabel>
//             <Input 
//                 type='text' 
//                 placeholder='Enter your name' 
//                 onChange={(e) => setName(e.target.value)}
//             />       
//       </FormControl>

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

//        <FormControl id='password' isrequired>
//         <FormLabel>Confirm Password</FormLabel>
//             <InputGroup>
//                 <Input 
//                   type={show ? "text" : "password"}
//                   placeholder='Confirm password' 
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//             />       
//             <InputRightElement>
//                 <Button h="1.75rem" size="sm" onClick={handleClick}>
//                     {show ? "Hide" : "Show"}
//                 </Button>
//             </InputRightElement>
//             </InputGroup>            
//       </FormControl>

//       <FormControl id='pic' isrequired>
//         <FormLabel>Upload Your Picture</FormLabel>
//                 <Input 
//                   type='file'
//                   p={.5}
//                   accept="image/*" 
//                   onChange={(e) => postDetails(e.target.file)}
//                 />                       
//       </FormControl>

//         <Button  
//             colorScheme="blue"
//             width="100%"
//             style={{marginTop:'15px'}}
//             onClick={submitHandler}
//         >
//            Sign Up
//         </Button>
            
//     </VStack>
//   );
// };

// export default SignUp



// import React, { useState } from 'react';
// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Box } from '@chakra-ui/react';

// const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const togglePasswordVisibility = () => setShowPassword(!showPassword);

//     const handleSubmit = () => {
//         // Your sign-up logic goes here
//         console.log('Signing up...');
//     };

//     return (
//         <Box
//             w="100%"
//             maxW="400px"
//             mx="auto"
//             mt="8"
//             p="6"
//             bg="white"
//             boxShadow="md"
//             borderRadius="md"
//         >
//             <VStack spacing="6">
//                 <FormControl id='name' isRequired>
//                     <FormLabel>Name</FormLabel>
//                     <Input
//                         type='text'
//                         placeholder='Enter your name'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </FormControl>

//                 <FormControl id='email' isRequired>
//                     <FormLabel>Email</FormLabel>
//                     <Input
//                         type='email'
//                         placeholder='Enter your email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </FormControl>

//                 <FormControl id='password' isRequired>
//                     <FormLabel>Password</FormLabel>
//                     <InputGroup>
//                         <Input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder='Enter your password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <InputRightElement width="3rem">
//                             <Button h="1.5rem" size="sm" onClick={togglePasswordVisibility}>
//                                 {showPassword ? 'Hide' : 'Show'}
//                             </Button>
//                         </InputRightElement>
//                     </InputGroup>
//                 </FormControl>

//                 <FormControl id='confirm-password' isRequired>
//                     <FormLabel>Confirm Password</FormLabel>
//                     <InputGroup>
//                         <Input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder='Confirm your password'
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <InputRightElement width="3rem">
//                             <Button h="1.5rem" size="sm" onClick={togglePasswordVisibility}>
//                                 {showPassword ? 'Hide' : 'Show'}
//                             </Button>
//                         </InputRightElement>
//                     </InputGroup>
//                 </FormControl>

//                 <Button
//                     colorScheme="blue"
//                     width="100%"
//                     onClick={handleSubmit}
//                 >
//                     Sign Up
//                 </Button>
//             </VStack>
//         </Box>
//     );
// };

// export default SignUp;



import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Box, Heading } from '@chakra-ui/react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const togglePasswordVisibility = () => setShowPassword(!showPassword);

    // const handleSubmit = async () => {
    //     // Validate form fields before submitting
    //     if (!name || !email || !password || !confirmPassword) {
    //         setError('Please fill in all fields');
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         setError('Passwords do not match');
    //         return;
    //     }

    //     try {
    //         // Send a POST request to your backend server to create a new user
    //         const response = await fetch('/api/add-user', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 email,
    //                 password
    //             })
    //         });

    //         if (response.ok) {
    //             // User successfully signed up
    //             console.log('User signed up successfully');
    //             // Optionally, redirect the user to another page
    //             // history.push('/dashboard');
    //         } else {
    //             // Error occurred during sign-up
    //             console.error('Error signing up:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error.message);
    //     }
    // };

//     return (
//         <Box
//             w="100%"
//             maxW="400px"
//             mx="auto"
//             mt="8"
//             p="6"
//             bg="white"
//             boxShadow="lg"
//             borderRadius="xl"
//         >
//             <VStack spacing="6">
//                 <Heading as="h2" size="lg" textAlign="center">Sign Up</Heading>

//                 <FormControl id='name' isRequired>
//                     <FormLabel>Name</FormLabel>
//                     <Input
//                         type='text'
//                         placeholder='Enter your name'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                 </FormControl>

//                 <FormControl id='email' isRequired>
//                     <FormLabel>Email</FormLabel>
//                     <Input
//                         type='email'
//                         placeholder='Enter your email'
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </FormControl>

//                 <FormControl id='password' isRequired>
//                     <FormLabel>Password</FormLabel>
//                     <InputGroup>
//                         <Input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder='Enter your password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <InputRightElement width="3rem">
//                             <Button
//                                 h="1.5rem"
//                                 size="sm"
//                                 onClick={togglePasswordVisibility}
//                                 variant="ghost"
//                                 colorScheme="gray"
//                             >
//                                 {showPassword ? 'Hide' : 'Show'}
//                             </Button>
//                         </InputRightElement>
//                     </InputGroup>
//                 </FormControl>

//                 <FormControl id='confirm-password' isRequired>
//                     <FormLabel>Confirm Password</FormLabel>
//                     <InputGroup>
//                         <Input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder='Confirm your password'
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <InputRightElement width="3rem">
//                             <Button
//                                 h="1.5rem"
//                                 size="sm"
//                                 onClick={togglePasswordVisibility}
//                                 variant="ghost"
//                                 colorScheme="gray"
//                             >
//                                 {showPassword ? 'Hide' : 'Show'}
//                             </Button>
//                         </InputRightElement>
//                     </InputGroup>
//                 </FormControl>

//                 <Button
//                     colorScheme="blue"
//                     width="100%"
//                     onClick={handleSubmit}
//                 >
//                     Sign Up
//                 </Button>
//             </VStack>
//              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Already have an account?  <Link to="/login" style={{ color: 'red', textDecoration: 'underline' }}>Login</Link></p>
//         </Box>
//     );
// };


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Define setSuccessMessage
    const history = useHistory();
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async () => {
        // Validate form fields before submitting
        if (!name || !email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Send a POST request to your backend server to create a new user
            const response = await fetch('/api/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            if (response.ok) {
                // User successfully signed up
                setSuccessMessage('User signed up successfully');
                // Redirect the user to another page after successful signup
                history.push('/login');
            } else if (response.status === 400) {
                // Handle specific error cases
                const data = await response.json();
                setError(data.message);
            } 
            // else if(response.status===201){
            //     const data = await response.json();
            //     setError(data.message);
            // }
            else {
                // Handle other errors
                setError('Error signing up');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('Internal server error');
        }
        return (
        <div>
            {successMessage && <div>{successMessage}</div>}
            {error && <div>{error}</div>}
            {/* Your sign-up form JSX */}
        </div>
         );
    };
    return (
        <Box
            w="100%"
            maxW="400px"
            mx="auto"
            mt="8"
            p="6"
            bg="white"
            boxShadow="lg"
            borderRadius="xl"
        >
            <VStack spacing="6">
                <Heading as="h2" size="lg" textAlign="center">Sign Up</Heading>

                <FormControl id='name' isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>

                <FormControl id='email' isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>

                <FormControl id='password' isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement width="3rem">
                            <Button
                                h="1.5rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                variant="ghost"
                                colorScheme="gray"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id='confirm-password' isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <InputRightElement width="3rem">
                            <Button
                                h="1.5rem"
                                size="sm"
                                onClick={togglePasswordVisibility}
                                variant="ghost"
                                colorScheme="gray"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                {error && <Box color="red.500">{error}</Box>}

                <Button
                    colorScheme="blue"
                    width="100%"
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
            </VStack>
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Already have an account?  <Link to="/login" style={{ color: 'red', textDecoration: 'underline' }}>Login</Link></p>
        </Box>
    );
};


export default SignUp;
