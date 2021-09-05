import { Avatar, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";

import { FiBox, FiPieChart, FiDollarSign, FiHome } from "react-icons/fi";

const SideBar = () => {
  return (
    <Flex
      w={["100%", "100%", "10%", "15%", "15%"]}
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex
        flexDir="column"
        justifyContent="space-between"
        h={[null, null, "100vh"]}
      >
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={[25, 50, 100]}
            fontSize={("4xl", "4xl", "2xl", "3xl", "4xl")}
            alignSelf="center"
            letterSpacing="tight"
          >
            Rise.
          </Heading>
          <Flex
            flexDir={["row", "row", "column", "column", "column"]}
            align={["center", "center", "center", "flex-start", "flex-start"]}
            justifyContent="center"
          >
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
              <Link
                display={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <Icon
                  display={["none", "none", "flex", "flex", "flex"]}
                  as={FiHome}
                  fontSize="2xl"
                  className="active-icon"
                />
              </Link>
              <Link
                display={["flex", "flex", "none", "flex", "flex"]}
                _hover={{ textDecor: "none" }}
              >
                <Text className="active">Home</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
              <Link
                display={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <Icon
                  display={["none", "none", "flex", "flex", "flex"]}
                  as={FiPieChart}
                  fontSize="2xl"
                />
              </Link>
              <Link
                display={["flex", "flex", "none", "flex", "flex"]}
                _hover={{ textDecor: "none" }}
              >
                <Text>Credit</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
              <Link
                display={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <Icon
                  display={["none", "none", "flex", "flex", "flex"]}
                  as={FiDollarSign}
                  fontSize="2xl"
                />
              </Link>
              <Link
                display={["flex", "flex", "none", "flex", "flex"]}
                _hover={{ textDecor: "none" }}
              >
                <Text>Wallet</Text>
              </Link>
            </Flex>
            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
              <Link
                display={[
                  "center",
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <Icon
                  display={["none", "none", "flex", "flex", "flex"]}
                  as={FiBox}
                  fontSize="2xl"
                />
              </Link>
              <Link
                display={["flex", "flex", "none", "flex", "flex"]}
                _hover={{ textDecor: "none" }}
              >
                <Text>Services</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Avatar my={2} src="cool-boy.png" />
          <Text>Himanshu Srivastava</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideBar;
