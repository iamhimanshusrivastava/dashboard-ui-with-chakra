import { useState } from 'react';

import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement
} from '@chakra-ui/react';

import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCrediCard,
    FiSearch,
    FiBell,
    FiClock
} from 'react-icons/fi';

import Container from '../components/UI/Container';
import SideBar from '../components/UI/SideBar';

const dashboard = () => {
    return (
        <Container>
            <SideBar />
            {/* Column 2 */}
            <Flex>

            </Flex>
            {/* Column 3 */}
            <Flex>

            </Flex>
        </Container>
    )
};

export default dashboard;
