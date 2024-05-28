import { Route, Routes } from "react-router-dom";

import { Tables } from "../pages/Tables";
import { Reports } from "../pages/Reports";
import { Forecast } from "../pages/Forecast";
import { Box } from "@chakra-ui/react";
import Charts from "../pages/Charts";

export const AllRoutes: React.FC = () => {
  return (
    <>
    <Box width={"80%"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}  ml={"250px"}>
      <Routes>
        <Route path="/chart" element={<Charts />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
      </Box>
    </>
  );
};
