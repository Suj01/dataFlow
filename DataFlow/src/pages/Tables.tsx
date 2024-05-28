import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableContainer,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import dataflow from "../data.json";

interface OverheadData {
  Overhead: string;
  Jan: number;
  Feb: number;
  March: number;
  April: number;
  May: number;
  June: number;
  July: number;
  August: number;
  September: number;
  October: number;
  November: number;
  December: number;
}

export const Tables: React.FC = () => {
  const [data, setData] = useState<OverheadData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 7;

  useEffect(() => {
    setData(dataflow.Sheet1);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const roundedData = data.map((el) => ({
    ...el,
    Jan: Math.ceil(el.Jan),
    Feb: Math.ceil(el.Feb),
    March: Math.ceil(el.March),
  }));

  const chartData = {
    labels: roundedData.slice(0, 4).map((el) => el.Overhead),
    datasets: [
      {
        label: "January",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: roundedData.slice(0, 4).map((el) => el.Jan),
      },
      {
        label: "February",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: roundedData.slice(0, 4).map((el) => el.Feb),
      },
      {
        label: "March",
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "rgba(54,162,235,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54,162,235,0.4)",
        hoverBorderColor: "rgba(54,162,235,1)",
        data: roundedData.slice(0, 4).map((el) => el.March),
      },
    ],
  };

  return (
    <Box p={4}>
      <Box width={"100%"} display={"flex"} justifyContent={"space-between"} mt={10}>
        <Bar data={chartData} />
      </Box>
      <TableContainer mt={10}>
        <Table size="sm" border="1px solid #ddd">
          <Thead bg={"#d2f4f4"} p={10} color={"blue"} fontWeight={"600"}>
            <Tr>
              <Th>Overhead</Th>
              <Th>Jan</Th>
              <Th>Feb</Th>
              <Th>March</Th>
              <Th>April</Th>
              <Th>May</Th>
              <Th>June</Th>
              <Th>July</Th>
              <Th>August</Th>
              <Th>September</Th>
              <Th>October</Th>
              <Th>November</Th>
              <Th>December</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentData.map((el) => (
              <Tr key={el.Overhead}>
                <Td fontSize={"15px"} fontWeight={"600"}>
                  {el.Overhead}
                </Td>
                <Td bg={"#eeeeee"}>{el.Jan}</Td>
                <Td>{el.Feb}</Td>
                <Td bg={"#eeeeee"}>{el.March}</Td>
                <Td>{el.April}</Td>
                <Td bg={"#eeeeee"}>{el.May}</Td>
                <Td>{el.June}</Td>
                <Td bg={"#eeeeee"}>{el.July}</Td>
                <Td>{el.August}</Td>
                <Td bg={"#eeeeee"}>{el.September}</Td>
                <Td>{el.October}</Td>
                <Td bg={"#eeeeee"}>{el.November}</Td>
                <Td>{el.December}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="center" alignItems="center" mt={4}>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Box mx={2}>
          Page {currentPage} of {totalPages}
        </Box>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </Flex>
    </Box>
  );
};
