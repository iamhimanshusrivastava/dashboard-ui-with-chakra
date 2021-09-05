import { useState } from "react";

import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    InputGroup,
    Input,
    InputLeftElement,
    Icon,
    IconButton,
    Heading,
    Text,
} from "@chakra-ui/react";

import {
    FiBell,
    FiCreditCard,
    FiDollarSign,
    FiPlus,
    FiSearch,
} from "react-icons/fi";

const Checkout = () => {
    const [value, setValue] = useState(1);

    return (
        <Flex w={["100", "100", "35%"]} minW={[null, null, "300px", "300px", "400px"]} bgColor="#F5F5F5" p="3%" flexDir="column" overflow="auto">
            <Flex alignContent="center">
                <InputGroup
                    bgColor="#fff"
                    mb={4}
                    border="none"
                    borderColor="#fff"
                    borderRadius="10px"
                    mr={2}
                >
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiSearch color="gray" />}
                    />
                    <Input type="number" placeholder="Search" borderRadius="10px" />
                </InputGroup>
                <IconButton
                    icon={<FiBell />}
                    fontSize="sm"
                    bgColor="#fff"
                    isRound="true"
                    p="10px"
                />
                <Flex
                    w={30}
                    h={25}
                    bgColor="#B57295"
                    borderRadius="50%"
                    color="#fff"
                    align="center"
                    justify="center"
                    ml="-3"
                    mt="-2"
                    zIndex="100"
                    fontSize="xs"
                >
                    2
                </Flex>
            </Flex>
            <Heading letterSpacing="tight">My Cards</Heading>
            {value == 1 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, #B57295, #29259A)"
                >
                    <Flex
                        p="1em"
                        color="#fff"
                        flexDir="column"
                        h="100%"
                        justify="space-between"
                    >
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Current Balance</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    $5,750.20
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Icon mr={2} as={FiCreditCard} />
                                <Text>Rise.</Text>
                            </Flex>
                        </Flex>
                        <Text mb={4} align="center">
                            **** **** **** 1289
                        </Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        Valid Thru
                                    </Text>
                                    <Text fontSize="lg">12/23</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                            <Icon as={FiCreditCard} />
                        </Flex>
                    </Flex>
                </Box>
            )}
            {value == 2 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, yellow.300, blue.500)"
                >
                    <Flex
                        p="1em"
                        color="#fff"
                        flexDir="column"
                        h="100%"
                        justify="space-between"
                    >
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Current Balance</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    $5,750.20
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Icon mr={2} as={FiCreditCard} />
                                <Text>Rise.</Text>
                            </Flex>
                        </Flex>
                        <Text mb={4} align="center">
                            **** **** **** 1289
                        </Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        Valid Thru
                                    </Text>
                                    <Text fontSize="lg">12/23</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                            <Icon as={FiCreditCard} />
                        </Flex>
                    </Flex>
                </Box>
            )}
            {value == 3 && (
                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient="linear(to-t, orange.300, pink.600)"
                >
                    <Flex
                        p="1em"
                        color="#fff"
                        flexDir="column"
                        h="100%"
                        justify="space-between"
                    >
                        <Flex justify="space-between" w="100%" align="flex-start">
                            <Flex flexDir="column">
                                <Text color="gray.400">Current Balance</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    $5,750.20
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Icon mr={2} as={FiCreditCard} />
                                <Text>Rise.</Text>
                            </Flex>
                        </Flex>
                        <Text mb={4} align="center">
                            **** **** **** 1289
                        </Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex flexDir="column" mr={4}>
                                    <Text textTransform="uppercase" fontSize="xs">
                                        Valid Thru
                                    </Text>
                                    <Text fontSize="lg">12/23</Text>
                                </Flex>
                                <Flex flexDir="column">
                                    <Text textTransform="uppercase" fontSize="xs">
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                            <Icon as={FiCreditCard} />
                        </Flex>
                    </Flex>
                </Box>
            )}
            <Flex justifyContent="center" mt={2}>
                <Button
                    bgColor={value == 1 ? "gray.600" : "gray.400"}
                    onClick={() => setValue(1)}
                    size="xs"
                    mx={1}
                />
                <Button
                    bgColor={value == 2 ? "gray.600" : "gray.400"}
                    onClick={() => setValue(2)}
                    size="xs"
                    mx={1}
                />
                <Button
                    bgColor={value == 3 ? "gray.600" : "gray.400"}
                    onClick={() => setValue(3)}
                    size="xs"
                    mx={1}
                />
            </Flex>
            <Flex flexDir="column" my={4}>
                <Flex justify="space-between" mb={2}>
                    <Text>Balance</Text>
                    <Text fontWeight="bold">$140.42</Text>
                </Flex>
                <Flex justify="space-between" mb={2}>
                    <Text>Credit Limit</Text>
                    <Text fontWeight="bold">$150.00</Text>
                </Flex>
            </Flex>
            <Heading letterSpacing="tight" size="md" my={4}>
                Send Money to
            </Heading>
            <Flex>
                <AvatarGroup size="md" max={3}>
                    <Avatar src="girl-avatar.png" />
                    <Avatar src="cool-boy.png" />
                    <Avatar src="shekh.png" />
                    <Avatar src="girl-avatar.png" />
                    <Avatar src="girl-avatar.png" />
                </AvatarGroup>
                <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
            </Flex>
            <Text color="gray" mt={10} mb={2}>
                Card Number
            </Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<FiCreditCard color="gray.700" />}
                />
                <Input type="number" placeholder="xxxx xxxx xxxx xxxx"></Input>
            </InputGroup>
            <Text color="gray" mt={10} mb={2}>
                Sum
            </Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<FiDollarSign color="gray.700" />}
                />
                <Input type="number" placeholder="130.00"></Input>
            </InputGroup>
            <Button
                mt={4}
                bgColor="blackAlpha.900"
                color="#fff"
                p={7}
                borderRadius={15}
            >
                Send Money
            </Button>
        </Flex>
    );
};

export default Checkout;
