/* eslint-disable @typescript-eslint/restrict-template-expressions */
// import React from 'react'

// const login = () => {
//   return (
//     <div>login</div>
//   )
// }

// export default login
import { useState } from "react";
import { useSession, signIn, getCsrfToken } from "next-auth/react";
import Head from "next/head";
import LoginLayout from "../../components/Utils/LoginLayout";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useFormik } from "formik";
import { login_validate } from "../../utils/validate";
import { useRouter } from "next/router";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Form.module.css";
import { env } from "../../env/client.mjs";
import { NextPageContext } from "next";
interface props {
  csrfToken: string;
}
export default function Login({ csrfToken }: props) {
  const { data: session } = useSession();
  const router = useRouter();
  const [show, setShow] = useState(false);
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validate: login_validate,
  //   onSubmit,
  // });

  // async function onSubmit(values: { email: string; password: string }) {
  //   const status = await signIn("credentials", {
  //     redirect: false,
  //     email: values.email,
  //     password: values.password,
  //     callbackUrl: "/profile",
  //   });
  //   if (status?.ok) router.push(status.url!);
  //   else {
  //     toast.error(status?.error, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // }

  // Google Handler function
  async function handleGoogleSignin() {
    await signIn("google"), { callbackUrl: `${env.NEXT_PUBLIC_URL}/profile` };
  }
  // Gmail handler function
  async function handleEmailSignin() {
    await signIn("email");
  }
  // Github Login
  async function handleGithubSignin() {
    await signIn("github"), { callbackUrl: `${env.NEXT_PUBLIC_URL}/profile` };
  }
  return (
    <>
      {/* <SessionProvider session={session}> */}
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        {/* Same as */}
        {!session && (
          <LoginLayout>
            <Head>
              <title>Login</title>
            </Head>
            <section className="mx-auto flex w-3/4 flex-col gap-12">
              <div className="title">
                <h1 className="py-2 text-4xl font-bold text-gray-800">
                  WorkUp IN
                </h1>
                <p className="mx-auto text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, officia?
                </p>
              </div>

              {/* form */}
              {/* <form
                className="flex flex-col gap-5"
                onSubmit={formik.handleSubmit}
              >
                <div
                  className={`${styles.input_group} ${
                    formik.errors.email && formik.touched.email
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <input
                    type="email"
                    {...formik.getFieldProps("email")}
                    name="email"
                    placeholder="Email"
                    className={styles.input_text}
                  />
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-rose-500">{formik.errors.email}</span>
                ) : (
                  <></>
                )}

                <div
                  className={`${styles.input_group} ${
                    formik.errors.password && formik.touched.password
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <input
                    type={`${show ? "text" : "password"}`}
                    {...formik.getFieldProps("password")}
                    name="password"
                    placeholder="password"
                    className={styles.input_text}
                  />
                  <span
                    className="icon flex items-center px-4"
                    onClick={() => setShow(!show)}
                  >
                    <HiFingerPrint size={25} />
                  </span>
                </div>

                {formik.errors.password && formik.touched.password ? (
                  <span className="text-rose-500">
                    {formik.errors.password}
                  </span>
                ) : (
                  <></>
                )}
                {/* login buttons */}
              {/* <div className="input-button">
                  <button
                    type="submit"
                    className={`${styles.button_custom} mx-1 rounded-full bg-violet-500 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg`}
                  >
                    Login
                  </button>
                </div>
              </form> */}

              <form method="post" action="/api/auth/signin/email">
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <div
                  className={`${styles.input_group} ${
                    formik.errors.email && formik.touched.email
                      ? "border-rose-600"
                      : ""
                  }`}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Login with your Email"
                    className={styles.input_text}
                  />
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </div>
                <button
                  type="submit"
                  className={`${styles.button_custom} mx-1 mt-6 rounded-full bg-violet-500 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg`}
                >
                  Sign In with Email <FaGoogle />
                </button>
              </form>

              {formik.errors.email && formik.touched.email ? (
                <span className="text-rose-500">{formik.errors.email}</span>
              ) : (
                <></>
              )}

              <div className={`${"input-button"} flex items-center`}>
                <button
                  type="button"
                  onClick={void handleGoogleSignin}
                  className={`${styles.button_custom} mx-1 rounded-full bg-violet-500 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg`}
                >
                  Sign In with Google <FaGoogle />
                </button>
              </div>
              <div className="input-button">
                <button
                  type="button"
                  onClick={void handleGithubSignin}
                  className={`${styles.button_custom} mx-1 rounded-full bg-violet-500 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg`}
                >
                  Sign In with Github <FaGithub />
                </button>
              </div>
              {/* bottom */}
              {/* <p className="text-center text-gray-400 ">
                Don&apos;t have an account yet?{" "}
                <Link href={"/account/signup"} className="text-purple-700">
                  Sign Up
                </Link>
              </p> */}
            </section>
          </LoginLayout>
        )}
      </>
      {/* </SessionProvider> */}
    </>
  );
}
export async function getServerSideProps(ctx: NextPageContext) {
  const csrfToken = await getCsrfToken(ctx);
  const session = 
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
}
