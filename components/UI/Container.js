import { Flex } from "@chakra-ui/react";

const Container = (props) => {
  return (
    <Flex
      h={[null, null, "100vh"]}
      flexDir={["column", "column", "row"]}
      overflow="hidden"
      maxW="2000px"
    >
      {props.children}
    </Flex>
  );
};

export default Container;
