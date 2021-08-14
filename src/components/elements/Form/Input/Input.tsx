import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { 
  Flex, 
  Input as ChakraImpt, 
  FormLabel, 
  Text,
  Icon
} from '@chakra-ui/react'
import { useField } from '@unform/core';
import { RiSearchLine } from 'react-icons/ri'

import { InputMaskStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  mask?: string;
}

interface SearchProps {
  name2: string;
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  

  return (
    <Flex
      flexDir="column"
    >
      <FormLabel 
        htmlFor={rest.id}
      >
        {label}
      </FormLabel>
      <ChakraImpt 
        {...rest}
        autoComplete="off"
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={inputRef}
      /> 
      <Flex h="36px">
        {error && (
          <Text>
            {error}
          </Text>
        )}
      </Flex>
    </Flex>
  )
}

export const InputMask = ({ name, label, mask, ...rest }: InputProps) => {
  return (
    <Flex
      flexDir="column"
    >
      <FormLabel 
        htmlFor={rest.id}
      >
        {label}
      </FormLabel>
      <InputMaskStyled
        {...{name, mask, ...rest }}
      /> 
    </Flex>
  )
}

export const SearchInput = (handleOnFocus) => {

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <ChakraImpt 
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon 
        as={RiSearchLine}
        fontSize="20"
      />
    </Flex>
  )
}