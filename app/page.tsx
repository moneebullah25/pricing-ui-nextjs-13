"use client";

import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import checkMarkIcon from "./icons/checkMarkIcon";
import icon1 from "./icons/icon1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";

export default function Home() {
  return (
    <>
      <Box
        textAlign={{ base: "left", md: "left", lg: "center" }}
        pl="15px"
        bg="#6B46C1"
        pt="90px"
        pb="250px"
        color="white"
      >
        <Heading>Simple pricing for your business</Heading>
        <Text pt="10px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
      {/* // Pricing Package */}
      <Box
        maxW="950px"
        mx={{ base: "20px", lg: "auto" }}
        //   ml={{ base: "20px", lg: "auto" }}
        //   mr={{ base: "20px", lg: "auto" }}
        mt="-150px"
        //   mx="20px"
        bg="white"
        borderRadius={"16px"}
        overflow="hidden"
        boxShadow={
          " 0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
        }
      >
        <Flex direction={{ base: "column", md: "column", lg: "row" }}>
          {/* left box */}
          <Box bg="#cbb8ee" p="40px" textAlign={"center"}>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              Premium PRO
            </Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Text>billed just once</Text>
            <Button mt={"20px"} w={"300px"} color={"white"} bg={"#805AD5"}>
              Get Started
            </Button>
          </Box>
          {/* right box */}
          <Box pt="50px" pl="25px" pr="10px">
            <Text mb="10px">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack mb={"15px"}>
              <Icon as={checkMarkIcon} />
              <Text>International calling and messaging API</Text>
            </HStack>

            <HStack mb={"15px"}>
              <Icon as={checkMarkIcon} />
              <Text>Additional phone numbers</Text>
            </HStack>

            <HStack mb={"15px"}>
              <Icon as={checkMarkIcon} />
              <Text>Automated messages via Zapier</Text>
            </HStack>

            <HStack mb={"15px"}>
              <Icon as={checkMarkIcon} />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
        {/* box container end */}
      </Box>
      {/* Lower Part */}
      <Box maxW={"800px"} m="auto" mt="25px" px="50px">
        <Flex direction={{ base: "column", lg: "row" }}>
          <HStack mb="20px">
            <Icon as={icon1} />
            <Text>30 days money back Guarantee</Text>
          </HStack>

          <HStack mb="20px">
            <Icon as={icon2} />
            <Text>No setup fees 100% hassle-free</Text>
          </HStack>

          <HStack mb="20px">
            <Icon as={icon3} />
            <Text>No monthly subscription Pay once and for all</Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
