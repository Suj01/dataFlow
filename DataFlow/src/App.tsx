import { Box, Button, HStack } from "@chakra-ui/react";
import "./App.css";

import { AllRoutes } from "./routes/AllRoutes";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Box display={"flex"} gap={10}>
        <Sidebar />
        <Box boxShadow={"rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.2) 0px 2px 6px"}>
          <Box display={"flex"} justifyContent={"space-between"} >
            <HStack>
         {/* <Button>Summary</Button> */}
            </HStack>
            <HStack>
         
            </HStack>
          </Box>
          <AllRoutes />
        </Box>
      </Box>
    </>
  );
}

export default App;
