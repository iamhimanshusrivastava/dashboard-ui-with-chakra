import { Flex } from '@chakra-ui/react';

const Container = (props) => {
    return (
        <Flex
            h="100vh"
            flexDir="row"
            overflow="hidden"
            maxW="2000px"
        >
            {props.children}
        </Flex>
    )
};

export default Container;