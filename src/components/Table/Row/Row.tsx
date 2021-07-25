export const Row = ({ item, sizes = [] }) => {
  const keys = Object.keys(item)

  return (
    <tr>
      {
        keys.map((key, index) => 
          <td 
            style={{ padding: '2px 10px' }} 
            key={index} 
          >
            {item[key]}  
          </td> )
      }
    </tr>
  )
}