import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Graphic } from '../../elements/Graphic'
import { Header } from '../../elements/Header'
import { Sidebar } from '../../elements/Sidebar'

import { options, series } from './mock'

export const DashboardPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid 
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
         <Graphic 
          title="Inscritos da semana"
          {...{ options, series }}
         />
         <Graphic 
          title="Taxa de abertura"
          {...{ options, series }}
         />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}