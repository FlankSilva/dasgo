import { Drawer as ChakraDrawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react"
import { useSidebarDrawer } from "../../../../contexts/SidebarDrawerContext"
import { SidebarNav } from "../SidebarNav"


export const Drawer = () => {
  const { isOpen, onClose } = useSidebarDrawer()

  return (
    <ChakraDrawer
      {...{onClose, isOpen, placement:"left"}}
    >
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt="6"/>
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  )
}