import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'
import { AiOutlineDownload } from 'react-icons/ai'
import { CSVLink } from "react-csv";
import { Card } from '../../../elements/Card'
import { Header } from '../../../elements/Header'
import { Sidebar } from '../../../elements/Sidebar'
import { Table } from '../../../elements/Table'
import { Heading } from './Heading'

import { data, sizes, head } from '../mock'

export const Users = () => {
  const dataTable = data.map(item => {
    const name = (
      <Box>
        <Text fontWeight="bold">
          {item.name}
        </Text>
        <Text fontSize="sm" color="gray.300">
          {item.email}
        </Text>
      </Box>
    )

    const buttonEdit = (
      <Button 
        as="a" 
        size="sm" 
        fontSize="sm" 
        colorScheme="purple"
        leftIcon={<Icon as={RiPencilLine}/>}
        onClick={() => console.log(item.id)}
        cursor="pointer"
      >
        Editar
      </Button>
    )

    return {
      id: item.id,
      name: name,
      last: item.last,
      address: item.address,
      number: item.number,
      city: item.city,
      state: item.state,
      '' : buttonEdit
    }
  })

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
        <Card>
          <Heading />
          <CSVLink data={data} filename={'usuários.csv'}>
            <Flex justifyContent="flex-end">
              <AiOutlineDownload size={25} />
            </Flex>
          </CSVLink>
          <Table {...{ data: dataTable, sizes, head }} />
        </Card>
      </Flex>
    </Box>
  )
}