import { Button, Flex, Heading as ChakraHeading, Icon, Spinner } from "@chakra-ui/react"
import Link from "next/link"
import { RiAddLine } from "react-icons/ri"

interface HeadingProps {
  isLoading?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ isLoading }) => {
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
      {isLoading && (
        <Spinner size="sm" color="gray.500" ml="4"/>
      )}
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