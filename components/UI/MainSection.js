import { useState } from "react";

import {
  Avatar,
  Divider,
  Flex,
  Heading,
  Text,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { FiCalendar, FiChevronsDown, FiChevronsUp } from "react-icons/fi";

import MyChart from "../MyChart";

const MainSection = () => {
  const [display, setDisplay] = useState("hide");

  return (
    <Flex
      w={["100%", "100%", "60%", "60%", "55%"]}
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
    >
      <Heading fontWeight="normal" letterSpacing="tight">
        Welcome back,{" "}
        <Flex fontWeight="bold" display="inline-flex">
          Himanshu
        </Flex>
      </Heading>
      <Text color="gray" fontSize="sm">
        My Balance
      </Text>
      <Text fontWeight="bold" fontSize="2xl">
        $5,750.20
      </Text>
      <MyChart />
      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end">
          <Heading as="h2" letterSpacing="tight">
            Transactions
          </Heading>
          <Text fontSize="small" ml={4}>
            Apr 2021
          </Text>
        </Flex>
        <IconButton icon={<FiCalendar />} />
      </Flex>
      <Flex flexDir="column">
        <Flex overflow="auto">
          <Table variant="unstyled" mt={4}>
            <Thead>
              <Tr color="gray">
                <Th>Name of transaction</Th>
                <Th>Category</Th>
                <Th isNumeric>Cashback</Th>
                <Th isNumeric>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="amazon.jpeg" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Amazon
                      </Heading>
                      <Text fontSize="sm" color="gray">
                        Apr 24, 2021 at 1:40pm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Electronic Devices</Td>
                <Td isNumeric>+2$</Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$242
                  </Text>
                  .00
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="starbucks.png" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Starbucks
                      </Heading>
                      <Text fontSize="sm" color="gray">
                        Apr 22, 2021 at 2:43pmpm
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Cafe and restaurant</Td>
                <Td isNumeric>+23$</Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$32
                  </Text>
                  .00
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar size="sm" mr={2} src="youtube.png" />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Youtube
                      </Heading>
                      <Text fontSize="sm" color="gray">
                        Apr 13, 2021 at 11:23am
                      </Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>Social media</Td>
                <Td isNumeric>+4$</Td>
                <Td isNumeric>
                  <Text fontWeight="bold" display="inline-table">
                    -$112
                  </Text>
                  .00
                </Td>
              </Tr>
              {display == "show" && (
                <>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="amazon.jpeg" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Amazon
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 24, 2021 at 1:40pm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Electronic Devices</Td>
                    <Td isNumeric>+2$</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$242
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="starbucks.png" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Starbucks
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 22, 2021 at 2:43pmpm
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Cafe and restaurant</Td>
                    <Td isNumeric>+23$</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$32
                      </Text>
                      .00
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Flex align="center">
                        <Avatar size="sm" mr={2} src="youtube.png" />
                        <Flex flexDir="column">
                          <Heading size="sm" letterSpacing="tight">
                            Youtube
                          </Heading>
                          <Text fontSize="sm" color="gray">
                            Apr 13, 2021 at 11:23am
                          </Text>
                        </Flex>
                      </Flex>
                    </Td>
                    <Td>Social media</Td>
                    <Td isNumeric>+4$</Td>
                    <Td isNumeric>
                      <Text fontWeight="bold" display="inline-table">
                        -$112
                      </Text>
                      .00
                    </Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </Flex>
        <Flex align="center">
          <Divider />
          <IconButton
            icon={display == "show" ? <FiChevronsUp /> : <FiChevronsDown />}
            onClick={() => {
              if (display == "show") {
                setDisplay("hide");
              } else {
                setDisplay("show");
              }
            }}
          />
          <Divider />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainSection;
