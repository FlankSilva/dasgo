import { SimpleGrid } from "@chakra-ui/react"

export const RowGrid = ({children}: any) => {
  return (
    <SimpleGrid
      minChildWidth="240px"
      spacing={["6", "8"]}
      w="100%"
    >
      {children}
    </SimpleGrid>
  )
}