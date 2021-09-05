import { Fragment } from "react";
import Head from "next/head";

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
