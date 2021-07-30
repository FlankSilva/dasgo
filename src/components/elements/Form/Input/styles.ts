import styled from 'styled-components'
import InputMaskReact from 'react-input-mask'

export const InputMaskStyled = styled(InputMaskReact)`
  background-color: #181b23;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  color: #fff;
  border: 2px solid transparent;
  
  &:focus {
    border: 2px solid #D53F8C;
  }
`