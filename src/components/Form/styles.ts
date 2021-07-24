import styled from 'styled-components'
import { Form as FormUnform } from '@unform/web'

interface FormProps {
  w: string;
  maxW: string;
  bg: string;
  borderRadius: string;
  padding: string;
}

export const Form = styled(FormUnform)<FormProps>`

background-color: ${props => props.bg};
width: ${props => props.w};
max-width: ${props => props.maxW};
border-radius: ${props => props.borderRadius};
padding: ${props => props.padding}
`

