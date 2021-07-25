import { Table } from '../components/Table'

export const data = [
  {
    id: 1, 
    name: 'Flank',
    last: 'Silva',
  },
  {
    id: 1, 
    name: 'Allef',
    last: 'Silva',
  },
  {
    id: 1, 
    name: 'Silvana Sauro Leme',
    last: 'Moreira',
  },
  {
    id: 1, 
    name: 'Flank',
    last: 'Silva',
  },
]

const head = {
  id: 'Ident.',
  name: 'Nome',
  last: 'Sobre Nome'
}

const sizes = ['70px', '100px', '100px']

export default function Tabela() {
  return (
   <Table {...{ data, head, sizes }} />
  )
}
