

import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaTable, FaFileAlt } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

export const Navbar = () => {
  const pages = [
    { id: 1, to: "/chart", name: "Charts", icon: FaChartBar },
    { id: 2, to: "/tables", name: "Tables", icon: FaTable },
    { id: 3, to: "/report", name: "Reports", icon: FaFileAlt },
    { id: 4, to: "/forecast", name: "Forecast", icon: RiDiscordFill },
  ];

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"25px"} mt={10}>
        {pages.map((el) => (
          <NavLink 
            key={el.id} 
            to={el.to} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              textDecoration: 'none', 
              color: 'inherit',
              width: '100%', 
            }}
          >
            <Box 
              display="flex" 
              alignItems="center" 
              p={2} 
              borderRadius="md" 
              _hover={{ 
                bg: "yellowgreen", 
                color: "white",
              }}
              width="100%"
              justifyContent="center"
            >
              <el.icon />
              <Text ml={2}>{el.name}</Text>
            </Box>
          </NavLink>
        ))}
      </Box>
    </>
  );
};
