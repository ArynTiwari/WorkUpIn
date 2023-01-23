import { type NextPage } from "next";
import Head from "next/head";
import { api } from "../utils/api";
import Landing from "../components/Landing/Head";
import Footer from "../components/Landing/Footer";
import Services from "../components/Landing/Services";
import ForClient from "../components/Landing/ForClient";
import ForTalent from "../components/Landing/ForTalent";
const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from Aryan" });

  return (
    <>
      <Head>
        <title>WorkUp Beta</title>
        <meta name="description" content="In beta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="mx-4 mt-8 flex flex-col md:mx-6 lg:mx-12">
        <Landing />
        <Services />
        <ForClient />
        <ForTalent />
        <Footer />
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;

