import { useState, useEffect } from 'react';
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri'
import { AiOutlineDownload } from 'react-icons/ai'
import { CSVLink } from "react-csv";
import { useQuery } from 'react-query'

import { Card } from '../../../elements/Card'
import { Header } from '../../../elements/Header'
import { Sidebar } from '../../../elements/Sidebar'
import { Table } from '../../../elements/Table'
import { Heading } from './Heading'

import { sizes, head } from '../mock'

export const Users = () => {
  const [dataTable, setDataTable] = useState([])  

  const { data: dataT, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })
    
    return users
  }, {
    staleTime: 1000 * 5 // Tempo de carregamento dos dados
  })  

  useEffect(() => {
    if (dataT?.length) {

      const formatedData = dataT?.map(item => {
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
          id : item.id,
          name: name,
          createdAt: item.createdAt,
          '' : buttonEdit
        }
      })
      setDataTable(formatedData)
    }

  }, [dataT])
  
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
          {!isLoading && (
            <CSVLink data={dataT} filename={'usuários.csv'}>
              <Flex justifyContent="flex-end">
                <AiOutlineDownload size={25} />
              </Flex>
            </CSVLink>
          )}
          {dataTable.length && (
           <Table {...{ data: dataTable, sizes, head }} />
          )}
        </Card>
      </Flex>
    </Box>
  )
}