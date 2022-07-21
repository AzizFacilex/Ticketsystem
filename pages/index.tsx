import Head from "next/head";
import Feature from "../components/Feature";
import Tickets from "../components/Tickets/Tickets";
import Paper from "../components/Paper";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>ChainTickets Willkommen </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Paper />
        <Feature />
        <Tickets />
      </Layout>
    </>
  );
}
