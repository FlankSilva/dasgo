import { useState, useEffect } from 'react'
import { Head } from './Head'
import { Row } from './Row'
interface TableProps {
  data: any; 
  head?: object;
  sizes?: string[];
}

export const Table = ({ sizes, head, data }: TableProps) => {
  const [newData, setNewData] = useState(data)
  const keys = Object.keys(data[0])

  const orderTable = (item) => {
    const newData = [...data]
      
    const newLocations = newData.sort((a, b) => {       
      return a[item] < b[item] ? -1 : a[item] > b[item] ? 1 : 0
    })

    setNewData(newLocations)
  }


  return (
    <table>
      <Head {...{ keys, head, sizes, orderTable }}/>
      <tbody>
        {newData.map((item, index) => (
          <Row key={index} {...{item, sizes}}/>
        ))}
      </tbody>
    </table>
  )
}