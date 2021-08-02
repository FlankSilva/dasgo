import { Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext"
import { SearchInput } from '../../elements/Form/Input'
import { Logo } from "./Logo"
import { Profile } from "./Profile"

export const Header = () => {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton 
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine}/>}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />
      {isWideVersion && (
        <SearchInput />
      )}
      <Profile {...{isWideVersion}} />
    </Flex>
  )
}