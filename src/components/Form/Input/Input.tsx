import React, { useState, useEffect, useRef } from 'react';
import { Flex, Input as ChakraImpt, FormLabel, Text } from '@chakra-ui/react'
import { useField } from '@unform/core';

interface InputProps {
  name: string;
  type: string;
  id: string;
  label: string;
}

export const Input = ({ name, type, id, label }: InputProps) => {
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
        htmlFor={id}
      >
        {label}
      </FormLabel>
      <ChakraImpt 
        {...{name, type, id }}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={inputRef}
      /> 
      {error && (
        <Text>
          {error}
        </Text>
      )}
    </Flex>
  )
}