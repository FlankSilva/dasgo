import { FC } from "react"
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react"
import { generatePagesArray } from "./generatePagesArray"
import { PaginationItem } from "./PaginationItem"

interface PaginationProps {
  totalCountOfRegisters:  number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

export const Pagination: FC<PaginationProps> = ({ 
  totalCountOfRegisters, 
  registersPerPage = 10, 
  currentPage = 1,
  onPageChange
}) => {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage) //Ultima pagina que tenho

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
  : []

  return (
    <Stack 
      direction="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingsCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            { currentPage > (2 + siblingsCount) && (
              <Flex alignItems="flex-end">
                <Text color="gray.300" width="8" textAlign="center" >...</Text>
              </Flex>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        
        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
          { (currentPage + 1 + siblingsCount) < lastPage && (
            <Flex alignItems="flex-end">
              <Text color="gray.300" width="8" textAlign="center" >...</Text>
            </Flex>
          )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  )
}