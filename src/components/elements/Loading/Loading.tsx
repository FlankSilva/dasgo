import { FC } from 'react'
import { Container } from './styles'
import { AiOutlineDownload, AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container>
      <AiOutlineLoading3Quarters size={20} />
    </Container>
  )
}