import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const MemberCard = ({ member }) => {
  return (
    <Box m={4} maxW="200px" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={member.photo} alt={member.name} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="lg" mb={2}>{member.name}</Text>
      </Box>
    </Box>
  );
}

export default MemberCard;
