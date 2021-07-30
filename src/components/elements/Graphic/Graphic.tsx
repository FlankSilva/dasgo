import { Box, Text, theme } from "@chakra-ui/react"
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

interface GraphicProps {
  title: string;
  series: object[];
  options: any;
}

export const Graphic = ({ title, options, series }: GraphicProps) => {
  return (
    <Box
      p="8"
      bg="gray.800"
      borderRadius={8}
      pb="4"
    >
      <Text
        fontSize="lg"
        mb="4"
      >
        { title }
      </Text>
      <Chart 
        options={options}
        series={series}
        type="area"
        height={160}
      />
    </Box>
  )
}