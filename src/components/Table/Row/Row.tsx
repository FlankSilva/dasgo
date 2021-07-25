interface RowProps {
  item: object;
}

export const Row = ({ item }: RowProps) => {
  const keys = Object.keys(item)

  const limitText = (text='') => {
    const formattedText = text.substr(0, 7)
    if (text.length >= 7) {
      return `${formattedText} ...`
    }

    return formattedText
  }

  return (
    <tr>
      {
        keys.map((key, index) => 
          <td 
            style={{ padding: '2px 0 10px' }} 
            key={index} 
          >
            {limitText(String(item[key]))}         
          </td> )
      }
    </tr>
  )
}