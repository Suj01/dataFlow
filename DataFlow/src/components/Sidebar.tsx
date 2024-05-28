import { Box, Center, Stack, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Navbar } from "../navbar/Navbar";
import bgImage from "../assets/bg1.jpg";

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={{ base: "block", md: "none" }} p={4}>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
          aria-label="Open Menu"
        />
      </Box>
      <Box
        display={{ base: "none", md: "flex" }}
        width={{ md: "25%", lg: "15%" }}
        height={{ base: "auto", md: "700px" }}
        color={"#fff"}
        p={{ base: 4, md: 2 }}
        backgroundImage={`url(${bgImage})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        flexDirection={"column"}
        justifyContent={"space-between"}
           position="fixed"
        top={0} 
        left={0} 
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient: "linear(to-r, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.9))",
          zIndex: 1,
        }}
      >
        <Box zIndex={2}>
          <Center>
            <Text
              mt={5}
              fontSize={{ base: "20px", md: "25px" }}
              fontWeight={"800"}
            >
              Data Flow
            </Text>
          </Center>
          <Navbar />
        </Box>
        <Stack gap={6} mb={5} zIndex={2}>
          <Box
            padding={{ base: "5px 10px", md: "10px" }}
            bg={"yellowgreen"}
            borderRadius="md"
            textAlign="center"
          >
            <Text fontSize={{ base: "12px", md: "15px" }} fontWeight={"500"}>
              Sujeet Kumar
            </Text>
            <Text fontSize={{ base: "12px", md: "15px" }} fontWeight={"500"}>
              User
            </Text>
          </Box>
          <Center>
            <Box
              padding={{ base: "10px 40px", md: "15px 80px" }}
              bg={"yellowgreen"}
              fontSize={{ base: "12px", md: "15px" }}
              fontWeight={"500"}
              borderRadius="md"
              cursor="pointer"
              textAlign="center"
            >
              Logout
            </Box>
          </Center>
        </Stack>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Data Flow</DrawerHeader>
          <DrawerBody>
            <Navbar />
            <Stack gap={6} mb={5}>
              <Box
                padding={{ base: "5px 10px", md: "10px" }}
                bg={"yellowgreen"}
                borderRadius="md"
                textAlign="center"
              >
                <Text fontSize={{ base: "12px", md: "15px" }} fontWeight={"500"}>
                  Sujeet Kumar
                </Text>
                <Text fontSize={{ base: "12px", md: "15px" }} fontWeight={"500"}>
                  User
                </Text>
              </Box>
              <Center>
                <Box
                  padding={{ base: "10px 40px", md: "15px 80px" }}
                  bg={"yellowgreen"}
                  fontSize={{ base: "12px", md: "15px" }}
                  fontWeight={"500"}
                  borderRadius="md"
                  cursor="pointer"
                  textAlign="center"
                >
                  Logout
                </Box>
              </Center>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
