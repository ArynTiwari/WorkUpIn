/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { getCsrfToken, signIn } from "next-auth/react";
import React from "react";
import { FaGoogle, FaGithub, FaDiscord } from "react-icons/fa";
import { env } from "../../env/client.mjs";
import { authOptions } from "../api/auth/[...nextauth]";
interface props {
  csrfToken: string;
}
const login = ({ csrfToken }: props) => {
  async function handleGoogleSignin() {
    await signIn("google"), { callbackUrl: `${env.NEXT_PUBLIC_URL}/profile` };
  }
  async function handleEmailSignin() {
    await signIn("email");
  }
  async function handleGithubSignin() {
    await signIn("github"), { callbackUrl: `${env.NEXT_PUBLIC_URL}/profile` };
  }
  async function handleDiscordSignin() {
    await signIn("discord"), { callbackUrl: `${env.NEXT_PUBLIC_URL}/profile` };
  }
  return (
    <>
      <section className="h-[80vh] flex flex-col">
        <div className="flex flex-col items-center justify-center text-center p-2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl antialiased">Work Up</h1>
          <p className="p-2 text-xl md:text-2xl lg:text-3xl antialiased">Unlock your full potential and reach new heights with WorkUp India </p>
        </div>
        <div className="my-auto px-6 text-gray-800">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="hidden w-full md:block"
                alt="Sample image"
              />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <button
                  onClick={handleDiscordSignin}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-violet-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg"
                >
                  <FaDiscord />
                </button>

                <button
                  onClick={ handleGithubSignin}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-violet-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  <FaGithub />
                </button>

                <button
                  onClick={handleGoogleSignin}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="mx-1 inline-block rounded-full bg-violet-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                >
                  <FaGoogle />
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
                <p className="mx-4 mb-0 text-center font-semibold">Or</p>
              </div>
              <form onSubmit={handleEmailSignin}>
                <div className="mb-6">
                  <input
                    name="csrfToken"
                    type="hidden"
                    defaultValue={csrfToken}
                  />

                  <input
                    type="email"
                    className="w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-center text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Working On It"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className=" mx-auto inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const logged = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  const csrfToken = await getCsrfToken(ctx);
  if (logged) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return {
    props: { logged, csrfToken },
  };
};
