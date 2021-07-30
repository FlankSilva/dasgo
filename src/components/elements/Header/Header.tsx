import { Flex, Text, useBreakpointValue } from "@chakra-ui/react"
import { SearchInput } from '../../elements/Form/Input'
import { Logo } from "./Logo"
import { Profile } from "./Profile"

export const Header = () => {
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
      <Logo />
      {isWideVersion && (
        <SearchInput />
      )}
      <Profile {...{isWideVersion}} />
    </Flex>
  )
}