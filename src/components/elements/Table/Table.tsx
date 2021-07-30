import { useState, useEffect } from 'react'
import { Table as ChakraTable, Tbody } from '@chakra-ui/react'

import { Head } from './Head'
import { Row } from './Row'
import { Pagination } from '../Pagination'
interface TableProps {
  data: any; 
  head?: object;
  sizes?: string[];
}

export const Table = ({ sizes, head, data }: TableProps) => {
  const [newData, setNewData] = useState(data)
  const [selected, setSelected] = useState('')
  const keys = Object.keys(data[0])

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
        <Tbody>
          {newData.map((item, index) => (
            <Row key={index} {...{item, sizes}}/>
          ))}
        </Tbody>
      </ChakraTable>
      <Pagination />
    </>
  )
}