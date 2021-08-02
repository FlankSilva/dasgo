import { Button, Flex, Heading as ChakraHeading, Icon } from "@chakra-ui/react"
import Link from "next/link"
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
      <Link href="/users/create" passHref>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="pink"
          leftIcon={<Icon as={RiAddLine}/>}
        >
          Criar novo
        </Button>
      </Link>
    </Flex>
  )
}