import Head from "next/head";
import LoginLayout from "../../components/LoginLayout";
import Link from "next/link";
import styles from "../../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "../../src/validate";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCsrfToken, getSession, GetSessionParams, signIn } from "next-auth/react";
import email from "next-auth/providers/email";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });
  async function onSubmit(values: any) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/signup`, options)
      .then((res) => res.json())
      .then((data) => {
        const { name } = data;
        if (name) {
          toast.error(`🦄${name}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("🦄 SignUp Successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            router.push(`${process.env.NEXT_PUBLIC_URL}`);
          }, 3000);
        }
      });
  }

  return (
    <LoginLayout>
      <Head>
        <title>Register</title>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.name && formik.touched.name ? "border-rose-600" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Name"
              {...formik.getFieldProps("name")}
              className={styles.input_text}
              name="name"
            />

            {formik.errors.name && formik.touched.name ? (
              <div className="text-rose-500 my-auto mr-1">
                <span className="text-rose-500 text-[16px] my-auto mr-1 ">
                  {formik.errors.name}
                </span>
              </div>
            ) : (
              <>
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} />
                </span>
              </>
            )}
          </div>

          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600 "
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

            {formik.errors.email && formik.touched.email ? (
              <div className="text-rose-500 my-auto mr-1">
                <span className="text-rose-500 text-[16px]">
                  {formik.errors.email}
                </span>
              </div>
            ) : (
              <>
                <span className="icon flex items-center px-4">
                  <HiAtSymbol size={25} />
                </span>
              </>
            )}
          </div>

          {/*Password*/}
          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.password ? "text" : "password"}`}
              {...formik.getFieldProps("password")}
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-rose-500 my-auto mr-1" aria-live="polite">
                <span className="text-rose-500 text-[14px]">
                  {formik.errors.password}
                </span>
              </div>
            ) : (
              <>
                <span
                  className="icon flex items-center px-4"
                  onClick={() => setShow({ ...show, password: !show.password })}
                >
                  <HiFingerPrint size={25} />
                </span>
              </>
            )}
          </div>

          {/**Confrim Password */}
          <div
            className={`${styles.input_group} ${
              formik.errors.cpassword && formik.touched.cpassword
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              {...formik.getFieldProps("cpassword")}
              name="cpassword"
              placeholder="Confirm Password"
              className={styles.input_text}
            />
            {formik.errors.cpassword && formik.touched.cpassword ? (
              <div className="text-rose-500 my-auto mr-1">
                <span className="text-rose-500 text-[16px]">
                  {formik.errors.cpassword}
                </span>
              </div>
            ) : (
              <>
                <span
                  className="icon flex items-center px-4"
                  onClick={() =>
                    setShow({ ...show, cpassword: !show.cpassword })
                  }
                >
                  <HiFingerPrint size={25} />
                </span>
              </>
            )}
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button
              type="submit"
              className={`${styles.button_custom} bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg transition duration-150 ease-in-out mx-1`}
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{" "}
          <Link href={"/account/login"} className="text-purple-700">
            Sign In
          </Link>
        </p>
      </section>
    </LoginLayout>
  );
}
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const logged = await getSession(context);
  if (logged) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }
  return {
    props: { logged},
  };
}
