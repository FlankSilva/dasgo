import { FC } from "react"
import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export const PaginationItem: FC<PaginationItemProps> = ({ number, isCurrent }) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        { number }
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.50'
      }}
    >
      { number }
    </Button>
  )
}