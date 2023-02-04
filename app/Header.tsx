import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{base:"left", md:"left", lg:"center" }}
      bg="#6B46C1"
      height={"400px"}
      textColor="white"
      pl={"20px"}
      pb="246px"
      pt={"90px"}
      // pr={"220px"}
      fontFamily="Inter"
      fontStyle={"normal"}
    >
      <Heading pb={"16px"}>Simple pricing for your business</Heading>
      <Text>Plans that are carefully crafted to suit your business.</Text>
    </Box>
  );
}
