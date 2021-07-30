import { Flex, Icon, HStack, Box, Text, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri"

interface ProfileProps {
  isWideVersion?: boolean;
}

export const Profile = ({ isWideVersion = true }: ProfileProps) => {
  return (
    <Flex
      alignItems="center"
      ml="auto"
    >
      <HStack 
        spacing={["6", "8"]}
        mx={["6", "8"]}
        pr={["6", "8"]}
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
      >
        <Icon as={RiNotificationLine}/>
        <Icon as={RiUserAddLine}/>
      </HStack>
      <Flex alignItems="center">
        { isWideVersion && (
          <Box
            mr="4"
            textAlign="right"
          >
            <Text
              color="gray.300"
              fontSize="small"
            >
              Flank Silva
            </Text>
            <Text>flank.silva.0@gmail.com</Text>
          </Box>
        ) }
        <Avatar size="md" name="Flank Silva" src="https://github.com/flanksilva.png" />
      </Flex>
    </Flex>
  )
}