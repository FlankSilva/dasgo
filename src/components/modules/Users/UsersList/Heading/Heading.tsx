import { Button, Flex, Heading as ChakraHeading, Icon } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"

export const Heading = () => {
  return (
    <Flex
      mb="8"
      justify="space-between"
      align="center"
    >
      <ChakraHeading 
        size="lg" 
        fontWeight="normal"
      >
        Usuários
      </ChakraHeading>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="pink"
        leftIcon={<Icon as={RiAddLine}/>}
      >
        Criar novo
      </Button>
    </Flex>
  )
}