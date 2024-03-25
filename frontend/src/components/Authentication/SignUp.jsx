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

//uncomment this one





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



//from here

// import React, { useState } from 'react';
// import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Box, Heading } from '@chakra-ui/react';
// import { Link, Redirect } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// const SignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState(''); 

    
//     // Define setSuccessMessage
//     const history = useHistory();
//     const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleSubmit = async () => {
//         // Validate form fields before submitting
//         if (!name || !email || !password || !confirmPassword) {
//             setError('Please fill in all fields');
//             return;
//         }

//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         try {
//             // Send a POST request to your backend server to create a new user
//             const response = await fetch('/api/add-user', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     pic,
//                     name,
//                     email,
//                     password
//                 })
//             });

//             if (response.ok) {
//                 // User successfully signed up
//                 setSuccessMessage('User signed up successfully');
//                 // Redirect the user to another page after successful signup
//                 history.push('/login');
//             } else if (response.status === 400) {
//                 // Handle specific error cases
//                 const data = await response.json();
//                 setError(data.message);
//             } 
//             // else if(response.status===201){
//             //     const data = await response.json();
//             //     setError(data.message);
//             // }
//             else {
//                 // Handle other errors
//                 setError('Error signing up');
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//             setError('Internal server error');
//         }
//         return (
//         <div>
//             {successMessage && <div>{successMessage}</div>}
//             {error && <div>{error}</div>}
//             {/* Your sign-up form JSX */}
//         </div>
//          );
//     };
    

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
                 
//                 {error && <Box color="red.500">{error}</Box>}

//                 <Button
//                     colorScheme="blue"
//                     width="100%"
//                     onClick={handleSubmit}
//                 >
//                     Sign Up
//                 </Button>
//             </VStack>
//             <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px' }}>Already have an account?  <Link to="/login" style={{ color: 'red', textDecoration: 'underline' }}>Login</Link></p>
//         </Box>
//     );
// };


// export default SignUp;

//new claude

import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Box, Heading, Center, Icon } from '@chakra-ui/react';
import { BsCamera } from 'react-icons/bs';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [pic, setProfilePicture] = useState(null);
    const [picPreview, setProfilePicturePreview] = useState(null);

    const history = useHistory();
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
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
         if (!isValidEmail(email)) {
            setError('Invalid email address');
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
                    password,
                    pic // Include the profile picture data in the request body
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
            } else {
                // Handle other errors
                setError('Error signing up');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('Internal server error');
        }
    };

const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
   
    reader.onloadend = () => {
      setProfilePicturePreview(file);
      const base64String = reader.result.split(',')[1]; // Extracting base64 string from data URL
      setProfilePicture(base64String); // Set the Base64 encoded image string to the state
     
    };

    if (file) {
      reader.readAsDataURL(file); // Read the image file as data URL
    }
  };

    const handleProfilePictureUpload = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
        setProfilePicturePreview(URL.createObjectURL(file));
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
         <Center mt="4">
    <label htmlFor="profile-picture-upload">
        {picPreview ? (
            <Box
                borderRadius="full"
                overflow="hidden"
                boxSize="14"
                border="2px solid gray.200"
            >
                <img
                    src={picPreview}
                    alt="Profile Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Box>
        ) : (
            <Icon
                as={BsCamera}
                boxSize="14"
                cursor="pointer"
                p="4"
                borderRadius="full"
                bg="gray.200"
            />
        )}
    </label>
    <input
        id="profile-picture-upload"
        type="file"
        accept="image/*"
        // onChange={handleProfilePictureUpload}
        onChange={handleFileChange}
        style={{ display: 'none' }}
    />
</Center>
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







// import { Button } from "@chakra-ui/button";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
// import { VStack } from "@chakra-ui/layout";
// import { useToast } from "@chakra-ui/toast";
// import axios from "axios";
// import { useState } from "react";
// //import { useHistory } from "react-router";
// import { useHistory } from 'react-router-dom';

// const Signup = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);
//   const toast = useToast();
//   const history = useHistory();

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [confirmpassword, setConfirmpassword] = useState();
//   const [password, setPassword] = useState();
//   const [pic, setPic] = useState();
//   const [picLoading, setPicLoading] = useState(false);

//   const submitHandler = async () => {
//     setPicLoading(true);
//     if (!name || !email || !password || !confirmpassword) {
//       toast({
//         title: "Please Fill all the Feilds",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//     if (password !== confirmpassword) {
//       toast({
//         title: "Passwords Do Not Match",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     console.log(name, email, password, pic);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/user",
//         {
//           name,
//           email,
//           password,
//           pic,
//         },
//         config
//       );
//       console.log(data);
//       toast({
//         title: "Registration Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setPicLoading(false);
//       history.push("/chats");
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//     }
//   };

//   const postDetails = (pics) => {
//     setPicLoading(true);
//     if (pics === undefined) {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     console.log(pics);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "chat-app");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           console.log(data.url.toString());
//           setPicLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setPicLoading(false);
//         });
//     } else {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//   };

//   return (
//     <VStack spacing="5px">
//       <FormControl id="first-name" isRequired>
//         <FormLabel>Name</FormLabel>
//         <Input
//           placeholder="Enter Your Name"
//           onChange={(e) => setName(e.target.value)}
//         />
//       </FormControl>
//       <FormControl id="email" isRequired>
//         <FormLabel>Email Address</FormLabel>
//         <Input
//           type="email"
//           placeholder="Enter Your Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </FormControl>
//       <FormControl id="password" isRequired>
//         <FormLabel>Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Enter Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//       <FormControl id="password" isRequired>
//         <FormLabel>Confirm Password</FormLabel>
//         <InputGroup size="md">
//           <Input
//             type={show ? "text" : "password"}
//             placeholder="Confirm password"
//             onChange={(e) => setConfirmpassword(e.target.value)}
//           />
//           <InputRightElement width="4.5rem">
//             <Button h="1.75rem" size="sm" onClick={handleClick}>
//               {show ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//       <FormControl id="pic">
//         <FormLabel>Upload your Picture</FormLabel>
//         <Input
//           type="file"
//           p={1.5}
//           accept="image/*"
//           onChange={(e) => postDetails(e.target.files[0])}
//         />
//       </FormControl>
//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         isLoading={picLoading}
//       >
//         Sign Up
//       </Button>
//     </VStack>
//   );
// };

// export default Signup;
