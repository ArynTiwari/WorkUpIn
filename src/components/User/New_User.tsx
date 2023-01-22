import { useFormik } from "formik";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import router from "next/router";
import React, { useState } from "react";
import { HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import {FaCity} from 'react-icons/fa'
import {GiZipper} from 'react-icons/gi'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../styles/Form.module.css";
import { validateNewUser } from "../../src/validate";
import { ChatBubbleBottomCenterIcon ,GlobeAsiaAustraliaIcon} from "@heroicons/react/24/outline";
import { env } from "../../env/client.mjs";

const NewUser = () => {
  let token: string;
  const { data: session } = useSession();
  if (session?.provider === "google") {
    token = session?.sessionToken;
  } else if (session?.provider === "github") {
    token = session.accessToken;
  }
  const [state, setstate] = useState("");
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      user: session?.user?.id,
      firstName: "",
      lastName: "",
      password: "",
      cpassword: "",
      description: "",
      gender: "",
      zip: undefined,
      city: "",
      state: "",
    },
    validate: validateNewUser,
    onSubmit,
  });
  async function onSubmit(values: any) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(values),
    };

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/updateUser`, options)
      .then((res) => res.json())
      .then((data) => {
        const { error } = data;
        if (error) {
          toast.error(`🦄${error}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("🦄 SignedUp Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        }
        function redirect() {
          void router.push(`${env.NEXT_PUBLIC_URL}/profile`);
        }
        setTimeout(redirect, 3000);
      });
  }
  return (
    <>
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
      <section className="flex flex-col justify-between items-center gap-10">
        <header>
          <div className="title flex flex-col text-center">
            <h1 className="text-gray-800  mx-auto  text-4xl font-bold py-4">
              Your Information
            </h1>
            <p className=" mx-auto text-gray-400">
            Update your information as per your verification id!
            </p>
          </div>
        </header>

        {/* form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div
              className={`${styles.input_group} ${
                formik.errors.firstName && formik.touched.firstName
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="First Name"
                {...formik.getFieldProps("firstName")}
                className={styles.input_text}
                name="firstName"
              />
              {formik.errors.firstName && formik.touched.firstName ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.firstName}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.lastName && formik.touched.lastName
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="Last Name"
                {...formik.getFieldProps("lastName")}
                className={styles.input_text}
                name="lastName"
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.lastName}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="password"
                placeholder="Password"
                {...formik.getFieldProps("password")}
                className={styles.input_text}
                name="password"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.password}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiFingerPrint size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.cpassword && formik.touched.cpassword
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="password"
                placeholder="Confirm Password"
                {...formik.getFieldProps("cpassword")}
                className={styles.input_text}
                name="cpassword"
              />
              {formik.errors.cpassword && formik.touched.cpassword ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.cpassword}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiFingerPrint size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.description && formik.touched.description
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="Description"
                {...formik.getFieldProps("description")}
                className={styles.input_text}
                name="description"
              />
              {formik.errors.description && formik.touched.description ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.description}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <ChatBubbleBottomCenterIcon height={25} width={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.gender && formik.touched.gender
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="Gender"
                {...formik.getFieldProps("gender")}
                className={styles.input_text}
                name="gender"
              />
              {formik.errors.gender && formik.touched.gender ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.gender}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.zip && formik.touched.zip ? "border-rose-600" : ""
              }`}
            >
              <input
                type="number"
                placeholder="Zip Code"
                {...formik.getFieldProps("zip")}
                className={styles.input_text}
                name="zip"
              />
              {formik.errors.zip && formik.touched.zip ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.zip}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <GiZipper size={25} color={'#845CFF'} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.city && formik.touched.city
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="City"
                {...formik.getFieldProps("city")}
                className={styles.input_text}
                name="city"
              />
              {formik.errors.city && formik.touched.city ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.city}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <FaCity size={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.state && formik.touched.state
                  ? "border-rose-600"
                  : ""
              }`}
            >
              <input
                type="text"
                placeholder="State"
                {...formik.getFieldProps("state")}
                className={styles.input_text}
                name="state"
              />
              {formik.errors.state && formik.touched.state ? (
                <div className="text-rose-500 text-[16px] mr-1 my-auto">
                  <span className="text-rose-500 text-[16px]">
                    {formik.errors.state}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <GlobeAsiaAustraliaIcon height={25} width={25} color={"#845CFF"} />
                </span>
              )}
              {/* <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} color={"green"} />
            </span> */}
            </div>
          </div>

          {/* login buttons */}
          <div className="w-2/4 mx-auto mt-4">
            <button
              type="submit"
              className={`${styles.button_custom} bg-violet-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg transition duration-150 ease-in-out mx-1`}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewUser;
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const logged = await getSession(context);
  if (!logged) {
    return {
      redirect: {
        destination: "/account/login",
        permanent: false,
      },
    };
  }

  return {
    props: { logged },
  };
}
