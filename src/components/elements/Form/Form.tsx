import React, { useRef, FormHTMLAttributes } from 'react'
import { Form as FormStyled } from './styles'
interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
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
  maxW, 
  bg='#2d2e38', 
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
      autoComplete="off"
      onSubmit={onSubmit}
      bg={bg}
      maxw={maxW}
      w={w}
      padding={padding}
      borderradius={borderRadius}
    >
      {children}
    </FormStyled>
  )
}