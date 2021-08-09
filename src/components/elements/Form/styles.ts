import styled from 'styled-components'
import { Form as FormUnform } from '@unform/web'

interface FormProps {
  w: string;
  maxw: string;
  bg: string;
  borderradius: string;
  padding: string;
}

export const Form = styled(FormUnform)<FormProps>`

background-color: ${props => props.bg};
width: ${props => props.w};
max-width: ${props => props.maxw};
border-radius: ${props => props.borderradius};
padding: ${props => props.padding}
`

