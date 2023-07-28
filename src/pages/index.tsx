import { type NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing/Head";
import Footer from "../components/Landing/Footer";
import Services from "../components/Landing/Services";
import ForClient from "../components/Landing/ForClient";
import ForTalent from "../components/Landing/ForTalent";
import Companies from "../components/Landing/Companies";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WorkUp (Demo)</title>
        <meta name="description" content="In beta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col  ">
        <Landing />
        <Companies/>
        <Services />
        <ForClient />
        <ForTalent />
        <Footer />
      </main>
    </>
  );
};

export default Home;
