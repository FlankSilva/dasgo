import { Head } from './Head'
import { Row } from './Row'

export const Table = ({ data = [], head = {}, sizes = [] }) => {
  const keys = Object.keys(data[0])

  return (
    <table>
      <Head {...{ keys, head, sizes }}/>
      <tbody>
        {data.map((item, index) => (
          <Row key={index} {...{item, sizes}}/>
        ))}
      </tbody>
    </table>
  )
}