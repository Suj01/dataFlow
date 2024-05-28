

import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Text, Button, Input, Flex } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import dataflow from "../data.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DataItem {
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

const Charts: React.FC = () => {
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage = 4;
  const data: DataItem[] = dataflow.Sheet1;

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.Overhead.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  }, [searchQuery, data]);

  const generateChartData = (el: DataItem) => {
    const backgroundColors = [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
      "rgba(199, 199, 199, 0.2)",
      "rgba(83, 102, 255, 0.2)",
      "rgba(99, 255, 132, 0.2)",
      "rgba(206, 86, 255, 0.2)",
      "rgba(192, 75, 75, 0.2)",
      "rgba(159, 64, 255, 0.2)",
    ];

    const borderColors = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
      "rgba(199, 199, 199, 1)",
      "rgba(83, 102, 255, 1)",
      "rgba(99, 255, 132, 1)",
      "rgba(206, 86, 255, 1)",
      "rgba(192, 75, 75, 1)",
      "rgba(159, 64, 255, 1)",
    ];

    return {
      labels: [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: el.Overhead,
          data: [
            el.Jan,
            el.Feb,
            el.March,
            el.April,
            el.May,
            el.June,
            el.July,
            el.August,
            el.September,
            el.October,
            el.November,
            el.December,
          ],
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    };
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box p={4} ml={{ base: "0", md: "30px" }}>
      <Flex justify="center" mb={4}>
        <Input
          placeholder="Search Overhead"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          width={{ base: "100%", md: "50%" }}
        />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={"40px"}>
        {currentData.map((el) => (
          <Box
            key={el.Overhead}
            mb={8}
            p={4}
            w={"100%"}
            boxShadow={
              "rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 2px 6px"
            }
            borderRadius={"md"}
            bg={"white"}
          >
            <Text fontWeight="bold" mb={4}>
              {el.Overhead}
            </Text>
            <Bar
              data={generateChartData(el)}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: el.Overhead,
                  },
                },
              }}
            />
          </Box>
        ))}
      </SimpleGrid>
      <Box textAlign="center" mt={4}>
        <Button onClick={prevPage} disabled={currentPage === 1} mr={2}>
          Previous
        </Button>
        <Button onClick={nextPage} disabled={currentPage === totalPages} ml={2}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Charts;
