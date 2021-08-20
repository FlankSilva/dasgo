import { Box, Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { CSVLink } from "react-csv";
import { AiOutlineDownload, AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";
import { Loading } from "../../../../elements/Loading";


interface CSVProps {
  dataT: any;
  loading: boolean;
}

export const CSV: FC<CSVProps> = ({ dataT = [], loading }) => {
  return (
    <Flex 
      w="40px"
      h="40px"
      ml="auto"
      justifyContent="center"
    >
     {dataT && !loading ? (
        <CSVLink data={dataT} filename={'usuários.csv'}>
          <Flex w="40px" h="100%" justifyContent="center">
            <Icon as={AiOutlineDownload} fontSize="30"/>
          </Flex>
        </CSVLink>
     ) : (
        <Loading isLoading={true}/>
     )}
    </Flex>
  )
}