import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../Header"
import { Sidebar } from "../Sidebar"

interface DefaultLayoutProps {
  children: JSX.Element
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        {children}
      </Flex>
    </Box>
  )
}