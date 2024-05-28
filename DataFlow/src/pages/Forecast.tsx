import {
  Box,
  Center,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import dataflow from "../data.json";

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

interface Totals {
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

interface Average {
  [key: string]: string;
}

export const Forecast: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    setData(dataflow.Sheet1);
  }, []);

  const calculateForecast = () => {
    if (data.length === 0) return [];

    const totals: Totals = data.reduce(
      (acc, item) => {
        acc.Jan += item.Jan;
        acc.Feb += item.Feb;
        acc.March += item.March;
        acc.April += item.April;
        acc.May += item.May;
        acc.June += item.June;
        acc.July += item.July;
        acc.August += item.August;
        acc.September += item.September;
        acc.October += item.October;
        acc.November += item.November;
        acc.December += item.December;
        return acc;
      },
      {
        Jan: 0,
        Feb: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      }
    );

    const average: Average = (Object.keys(totals) as Array<keyof Totals>).reduce((acc, key) => {
      acc[key] = (totals[key] / data.length).toFixed(2);
      return acc;
    }, {} as Average);

    return [
      { Month: "January", Value: average.Jan },
      { Month: "February", Value: average.Feb },
      { Month: "March", Value: average.March },
      { Month: "April", Value: average.April },
      { Month: "May", Value: average.May },
      { Month: "June", Value: average.June },
      { Month: "July", Value: average.July },
      { Month: "August", Value: average.August },
      { Month: "September", Value: average.September },
      { Month: "October", Value: average.October },
      { Month: "November", Value: average.November },
      { Month: "December", Value: average.December },
    ];
  };

  const forecastData = calculateForecast();

  return (
    <Center>
      <Box p={6} bgGradient="linear(to-b, gray.100, gray.200)" overflowX="auto">
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="gray.700">
          Overhead Costs Forecast
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr bg={"#d2f4f4"}>
              <Th>Month</Th>
              <Th>Overall Forecast</Th>
            </Tr>
          </Thead>
          <Tbody>
            {forecastData.map((item, index) => (
              <Tr key={index}>
                <Td color={"#000"}>{item.Month}</Td>
                <Td fontWeight={"600"} color={"#000"}>
                  {item.Value}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Center>
  );
};
