import { Checkbox, Td, Tr } from "@chakra-ui/react"

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
    <Tr>
      {
        keys.map((key, index) => {
          if (index === 0) {
            return (
              <Td px="6">
                <Checkbox
                  colorScheme="pink"
                />
              </Td>
            )
          } else {
            return (
              <Td 
                key={index} 
              >
                {item[key]}         
              </Td> 
            )
          }
        })
      }
    </Tr>
  )
}