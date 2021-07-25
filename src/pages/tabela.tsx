import { Flex } from '@chakra-ui/react'
import { Table } from '../components/Table'

export const data = [
  {
    id: 1, 
    name: 'Flank',
    last: 'Silva',
    address: 'Rua 1',
    number: 4,
    city: 'Campinas',
    state: 'SP',
  },
  {
    id: 2, 
    name: 'Allef',
    last: 'Silva',
    address: 'Rua 1',
    number: 4,
    city: 'Campinas',
    state: 'SP',
  },
  {
    id: 3, 
    name: 'Silvana Sauro Leme',
    last: 'Moreira',
    address: 'Rua 1',
    number: 4,
    city: 'Campinas',
    state: 'SP',
  },
  {
    id: 4, 
    name: 'Flank',
    last: 'Silva',
    address: 'Rua 1',
    number: 4,
    city: 'Campinas',
    state: 'SP',
  },
]

const head = {
  id: 'Ident.',
  name: 'Nome',
  last: 'Sobre Nome',
  address: 'Endereço',
  number: 'Nº',
  city: 'Cidade',
  state: 'Estado',
}

const sizes = ['70px', '100px', '120px', '120px', '70px', '120px', '50px']

export default function Tabela() {
  return (
    <Flex
      border="1px solid"
      w={300}
      overflow="hidden"
      overflowX="auto"
    >
      <Table {...{ data, head, sizes }} />
    </Flex>
  )
}
