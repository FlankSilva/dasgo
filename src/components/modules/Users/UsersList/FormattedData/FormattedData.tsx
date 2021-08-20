import { FC } from 'react'
import { Box, Text, Button, Icon } from "@chakra-ui/react";
import { RiPencilLine } from 'react-icons/ri';

interface NameProps {
  name: string;
  email: string;
}

interface ButtonProps {
  id?: string;
}

export const Name: FC<NameProps> = ({ name, email }) => {
  return (
    <Box>
      <Text fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="sm" color="gray.300">
        {email}
      </Text>
    </Box>
  )
}

export const ButtonEdit: FC<ButtonProps> = ({ id }) => {
  return (
    <Button 
      as="a" 
      size="sm" 
      fontSize="sm" 
      colorScheme="purple"
      leftIcon={<Icon as={RiPencilLine}/>}
      onClick={() => console.log(id)}
      cursor="pointer"
    >
      Editar
    </Button>
  )
}