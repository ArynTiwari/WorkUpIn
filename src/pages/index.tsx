import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
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
          <AuthShowcase />
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  const { data: user } = api.example.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-black">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {sessionData?.user?.id}</span>}
        {user && (
          <span>
            {user.map((u) => (
              <li key={u.id}>{u.email}</li>
            ))}
          </span>
        )}
      </p>
      <button
        className="rounded-full bg-violet-600 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
