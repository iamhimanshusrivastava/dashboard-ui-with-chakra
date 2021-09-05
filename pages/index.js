import { Fragment } from "react";
import Head from "next/head";

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
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
  FiClock,
} from "react-icons/fi";

import Container from "../components/UI/Container";
import SideBar from "../components/UI/SideBar";
import MainSection from "../components/UI/MainSection";
import Checkout from "../components/UI/Checkout";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>The Rise Dashboard</title>
        <meta name="description" content="The Rise Dashboard" />
        <link rel="icon" href="/Rise.ico" />
      </Head>

      <Container>
        <SideBar />
        <MainSection />
        <Checkout />
      </Container>
    </Fragment>
  );
}
