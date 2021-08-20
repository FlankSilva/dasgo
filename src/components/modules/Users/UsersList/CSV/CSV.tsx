import { Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { CSVLink } from "react-csv";
import { AiOutlineDownload } from "react-icons/ai";

interface CSVProps {
  dataT: any;
}

export const CSV: FC<CSVProps> = ({ dataT }) => {
  return (
    <CSVLink data={dataT} filename={'usuários.csv'}>
      <Flex justifyContent="flex-end">
        <Icon as={AiOutlineDownload} fontSize="25"/>
      </Flex>
    </CSVLink>
  )
}