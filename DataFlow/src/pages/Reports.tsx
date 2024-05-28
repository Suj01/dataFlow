import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Text, Heading, Button, Flex } from "@chakra-ui/react";
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

export const Reports: React.FC = () => {
  const [data, setData] = useState<OverheadData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setData(dataflow.Sheet1);
  }, []);

  const colors = [
    "linear(to-r, teal.500, green.500)",
    "linear(to-r, orange.500, yellow.500)",
    "linear(to-r, pink.500, red.500)",
    "linear(to-r, blue.500, cyan.500)",
    "linear(to-r, purple.500, pink.500)",
    "linear(to-r, yellow.500, orange.500)",
    "linear(to-r, cyan.500, blue.500)",
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Box p={6} bgGradient="linear(to-b, gray.100, gray.200)">
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="gray.700">
        Overhead Costs Report
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {currentData.map((el, index) => (
          <Box
            key={el.Overhead}
            p={4}
            boxShadow="md"
            borderRadius="md"
            bgGradient={colors[index % colors.length]}
            color="white"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {el.Overhead}
            </Text>
            <Text>January: ${el.Jan}</Text>
            <Text>February: ${el.Feb}</Text>
            <Text>March: ${el.March}</Text>
            <Text>April: ${el.April}</Text>
            <Text>May: ${el.May}</Text>
            <Text>June: ${el.June}</Text>
            <Text>July: ${el.July}</Text>
            <Text>August: ${el.August}</Text>
            <Text>September: ${el.September}</Text>
            <Text>October: ${el.October}</Text>
            <Text>November: ${el.November}</Text>
            <Text>December: ${el.December}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center" alignItems="center" mt={4}>
        <Button onClick={prevPage} disabled={currentPage === 1} mr={2}>
          Previous
        </Button>
        <Text mx={2}>
          Page {currentPage} of {totalPages}
        </Text>
        <Button onClick={nextPage} disabled={currentPage === totalPages} ml={2}>
          Next
        </Button>
      </Flex>
    </Box>
  );
};
