import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import icon1 from "./icons/icon1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";


export default function Features() {
  return (
    <Box maxW={"800px"} m="auto" mt="40px" px={"20px"}>
      <Flex direction={{base:"column", md:"column",lg:"row"}}>
        <HStack mr={"40px"} mb={"15px"}>
          <Icon as={icon1} ></Icon>
          <Text pl={"15px"} >30 days money back Guarantee</Text>
        </HStack>
        <HStack pr={"40px"} mb={"15px"}>
          <Icon as={icon2}></Icon>
          <Text pl={"15px"}>No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={"15px"}>
          <Icon as={icon3}></Icon>
          <Text pl={"15px"}>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
