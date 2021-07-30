import { Box, Divider, Heading } from "@chakra-ui/react"

interface CardProps {
  children?: any;
  title?: string
}

export const Card = ({ title ,children }: CardProps) => {
  return (
    <Box
    flex="1" 
    borderRadius={8}
    bg="gray.800"
    p="8"
  >
    {title && (
      <>
        <Heading size="lg" fontWeight="normal">
          {title}
        </Heading>
        <Divider my="6" borderColor="gray.700"/>
      </>
    )}
    {children}
  </Box>
  )
}