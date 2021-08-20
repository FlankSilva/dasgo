import { useState, useEffect } from 'react'
import { Table as ChakraTable, Tbody } from '@chakra-ui/react'

import { Head } from './Head'
import { Row } from './Row'
import { Pagination } from '../Pagination'
interface TableProps {
  data: any; 
  head?: object;
  sizes?: string[];
  totalCountOfRegisters?:  number;
  registersPerPage?: number;
  currentPage?: number;
  page: number;
  onPageChange: (page: number) => void;
}

export const Table = ({ 
  sizes, 
  head, 
  data,
  totalCountOfRegisters,
  registersPerPage,
  currentPage,
  page,
  onPageChange
}: TableProps) => {
  const [newData, setNewData] = useState([])
  const [selected, setSelected] = useState('')
  const keys = Object.keys(data[0])
  
  console.log(newData);
  

  const orderTable = (item) => {
    const newData = [...data]

    if(selected === item) {
      const newLocations = newData.sort((a, b) => {         
        return a[item] > b[item] ? -1 : a[item] < b[item] ? 1 : 0
      })
      setNewData(newLocations)
      setSelected('')
    } else {
      const newLocations = newData.sort((a, b) => {       
        return a[item] < b[item] ? -1 : a[item] > b[item] ? 1 : 0
      })
      setNewData(newLocations)
      setSelected(item)
    }
  }


  return (
    <>
      <ChakraTable
        colorScheme="whiteAlpha"
      >
        <Head {...{ keys, head, sizes, orderTable }}/>
        <Tbody 
          overflowX="auto"
          overflowY="auto"
        >
          {data.map((item, index) => (
            <Row key={index} {...{item, size: sizes[index]}}/>
          ))}
        </Tbody>
      </ChakraTable>
      <Pagination 
        totalCountOfRegisters={totalCountOfRegisters}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  )
}