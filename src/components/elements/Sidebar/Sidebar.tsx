import { Box, useBreakpointValue } from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'
import { Drawer } from './Drawer'

export const Sidebar = () => {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer />
    )
  }

  return (
    <Box 
      as="aside"
      w="64"
      mr="8"
    >
      <SidebarNav />
    </Box>
  )
}