import {
  Box,
  Button,
  color,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkMarkIcon from "./icons/checkMarkIcon";

export default function Pricing() {
  return (
    <Box
      maxW={"920px"}
      mx={{base:"20px", md:"20px", lg:"auto"}}
      // ml={{base:"10px", lg:"auto", md:"10px"}}
      // mr={{base:"10px", lg:"auto", md:"10px"}}
      mt={"-155"}
      bg="white"
      borderRadius={"12px"}
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Flex direction={{base:"column",md:"column", lg:"row" }}>
        <Box bg={"#a07be742"} p="60px" textAlign={"center"}>
          <Text fontSize="24px" fontWeight={"800"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"} mt="16px">
            $329
          </Heading>
          <Text mt={"8px"}>billed just once</Text>
          <Button
            bg={"#805AD5"}
            colorScheme="purple"
            w={"250px"}
            fontWeight="700"
            mt={"24px"}
            
          >
            Get Started
          </Button>
        </Box>

        <Box p={"48px"}>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mt={"24px"}>
            <Icon as={checkMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mt={"16px"}>
            <Icon as={checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mt={"16px"}>
            <Icon as={checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mt={"16px"}>
            <Icon as={checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
