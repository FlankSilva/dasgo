import React, { useRef } from 'react'
import { FormHandles } from '@unform/core';

import { Form as FormStyled } from './styles'

interface FormProps {
  w?: string;
  maxW?: string;
  bg?: string;
  borderRadius?: string;
  padding?: string;
  children: JSX.Element[];
  onSubmit: any;
  formRef: any;
}

export const Form = ({ 
  w='100%', 
  maxW='360px', 
  bg='#1f2029', 
  borderRadius='8px',
  padding='32px',
  onSubmit,
  formRef,
  children,
 }: FormProps
) => {

  return (
    <FormStyled
      ref={formRef}
      onSubmit={onSubmit}
      bg={bg}
      maxW={maxW}
      w={w}
      padding={padding}
      borderRadius={borderRadius}
    >
      {children}
    </FormStyled>
  )
}