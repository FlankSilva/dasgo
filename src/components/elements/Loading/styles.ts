import styled from 'styled-components'

export const Container = styled.div`
  animation: rotate 1s infinite linear;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
  }
`