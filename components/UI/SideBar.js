import {
    Avatar,
    Flex,
    Heading,
    Icon,
    Link,
    Text
} from '@chakra-ui/react';

import { FiBox, FiClock, FiDollarSign, FiHome } from 'react-icons/fi';

const SideBar = () => {
    return (
        <Flex
            w="15%"
            flexDir="column"
            alignItems="center"
            backgroundColor="#020202"
            color="#fff"
        >
            <Flex
                flexDir="column"
                justifyContent="space-between"
                h="100vh"
            >
                <Flex
                    flexDir="column"
                    as="nav"
                >
                    <Heading
                        mt={50}
                        mb={100}
                        fontSize="4xl"
                        alignSelf="center"
                        letterSpacing="tight"
                    >
                        Rise.
                    </Heading>
                    <Flex
                        flexDir="column"
                        align="flex-start"
                        justifyContent="center">
                        <Flex
                            className="sidebar-items"
                        >
                            <Link>
                                <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }}>
                                <Text className="active">Home</Text>
                            </Link>
                        </Flex>
                        <Flex
                            className="sidebar-items"
                        >
                            <Link>
                                <Icon as={FiClock} fontSize="2xl" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }}>
                                <Text>Credit</Text>
                            </Link>
                        </Flex>
                        <Flex
                            className="sidebar-items"
                        >
                            <Link>
                                <Icon as={FiDollarSign} fontSize="2xl" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }}>
                                <Text>Wallet</Text>
                            </Link>
                        </Flex>
                        <Flex
                            className="sidebar-items"
                        >
                            <Link>
                                <Icon as={FiBox} fontSize="2xl" />
                            </Link>
                            <Link _hover={{ textDecor: 'none' }}>
                                <Text>Services</Text>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    flexDir="column"
                    alignItems="center"
                    mb={10}
                    mt={5}
                >
                    <Avatar my={2} src="him.png" />
                    <Text>Himanshu Srivastava</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default SideBar;