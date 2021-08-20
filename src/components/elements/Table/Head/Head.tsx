import { Checkbox, Th, Thead, Tr } from "@chakra-ui/react"


export const Head = ({ keys = [], head = {}, sizes = [], orderTable }) => {
  const tableHead = head || {}
  
  return (
    <Thead>
      <Tr>
        {keys.map((item, index) => {
          if (index === 0) {
            return (
              <Th px="6" color="gray.300" width="8">
                <Checkbox 
                  colorScheme="pink"
                />
              </Th>
            )
          } else {
            return (
              <Th
                fontSize="18px"
                style={{ minWidth: sizes[index], textAlign: 'start', cursor: 'pointer' }} 
                key={index}
                onClick={() => 
                  orderTable(keys[index])
                }
              >
                {tableHead[item] || item}
              </Th>  
            )
          }
        }
          
        )}
      </Tr>
    </Thead>
  )
}
