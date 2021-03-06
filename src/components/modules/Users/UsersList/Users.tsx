import { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react'

import { Card } from '../../../elements/Card'
import { Header } from '../../../elements/Header'
import { Sidebar } from '../../../elements/Sidebar'
import { Table } from '../../../elements/Table'
import { Heading } from './Heading'
import { Name, ButtonEdit } from './FormattedData'

import { sizes, head } from '../mock'
import { useUseus } from '../../../../services/hooks/users/useUsers';
import { CSV } from './CSV';

export const Users = () => {
  const [dataTable, setDataTable] = useState([]) 
  
  const [page, setPage] = useState(1)

  const { data: dataT, isLoading, isFetched, error } = useUseus(page)


  useEffect(() => {
    if (dataT?.users?.length) {
      const formatedData = dataT?.users?.map(item => {
        const name = <Name name={item.name} email={item.email} />
        const buttonEdit = <ButtonEdit id={item.id}/>
    
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
          <Heading isLoading={isLoading && isFetched}/>
          <CSV dataT={dataT?.users} loading={isLoading}/>
          {dataTable.length && (
           <Table {...{ 
              data: dataTable,
              sizes, 
              head,
              onPageChange: setPage,
              page,
              totalCountOfRegisters: dataT?.totalCount,
              currentPage: page
            }} 
           />
          )}
        </Card>
      </Flex>
    </Box>
  )
}