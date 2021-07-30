import { Button as ButtonChakra, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'

interface ButtonProps extends ChakraButtonProps {
  title: string
} 

export const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <ButtonChakra {...rest}>
      { title }
    </ButtonChakra>
  )
}