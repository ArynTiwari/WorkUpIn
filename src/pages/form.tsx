/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "../styles/Form.module.css";
import { validateNewUser } from "../utils/validate";
import { HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import {
  ChatBubbleBottomCenterIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { GiZipper } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { api } from "../utils/api";
import router from "next/router";
import { env } from "../env/client.mjs";
const MyForm = () => {
  const mutation = api.user.updateUser.useMutation();
  type Role = "CLIENT" | "TALENT";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      cpassword: "",
      role:  "TALENT" as Role,
      about: "",
      gender: "",
      zip: 123456,
      city: "",
      state: "",
    },
    validate: validateNewUser,
    onSubmit,
  });
  async function onSubmit(values: {
    firstName: string;
    lastName: string;
    password: string;
    cpassword: string;
    role: "CLIENT" | "TALENT";
    about: string;
    gender: string;
    zip: number;
    city: string;
    state: string;
  }) {
    await mutation
      .mutateAsync(values)
      .then((result) => {
        toast.success(`🦄${result} posted Successfully! `, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          return void router.push(`${env.NEXT_PUBLIC_URL}/profile`);
        }, 3000);
      })
      .catch((error: Array<string>) => {
        Object.entries(error).forEach(([field, message]) => {
          toast.error(`🦄 ${field}: ${message} `, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        });
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

      <section className="flex flex-col items-center justify-between gap-10">
        <header>
          <div className="title flex flex-col text-center">
            <h1 className="mx-auto  py-4  text-4xl font-bold text-gray-800">
              Your Information
            </h1>
            <p className=" mx-auto text-gray-400">
              Update your information as per your verification id!
            </p>
          </div>
        </header>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="grid grid-cols-1 gap-3 p-4 md:grid-cols-2">
            <div
              className={`${styles.input_group} ${
                formik.errors.firstName && formik.touched.firstName
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.firstName}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
            </div>
            <div
              className={`${styles.input_group} ${
                formik.errors.lastName && formik.touched.lastName
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.lastName}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.password && formik.touched.password
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.password}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiFingerPrint size={25} color={"#845CFF"} />
                </span>
              )}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.cpassword && formik.touched.cpassword
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.cpassword}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiFingerPrint size={25} color={"#845CFF"} />
                </span>
              )}
            </div>
            <div
              className={`${styles.input_group as string} ${
                formik.errors.role && formik.touched.role
                  ? "border-rose-600"
                  : "border-violet-600"
              }`}
            >
              <select
                placeholder="Select user type"
                {...formik.getFieldProps("role")}
                className={styles.input_text}
                name="role"
              >
                <option value="">Select your Role</option>
                <option value="talent">TALENT</option>
                <option value="client">CLIENT</option>
              </select>
              {formik.errors.role && formik.touched.role ? (
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.role}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
            </div>

            <div
              className={`${styles.input_group as string} ${
                formik.errors.gender && formik.touched.gender
                  ? "border-rose-600"
                  : "border-violet-600"
              }`}
            >
              <select
                placeholder="Select user type"
                {...formik.getFieldProps("gender")}
                className={styles.input_text}
                name="gender"
              >
                <option value="" >Select Gender</option>
                <option value="talent">Male</option>
                <option value="client">Female</option>
                <option value="client">Other</option>
              </select>
              {formik.errors.gender && formik.touched.gender ? (
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.gender}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <HiOutlineUser size={25} color={"#845CFF"} />
                </span>
              )}
            </div>
            <div
              className={`${styles.input_group} ${
                formik.errors.about && formik.touched.about
                  ? "border-rose-600"
                  : "border-violet-600"
              }`}
            >
              <input
                type="text"
                placeholder="Write about yourself"
                {...formik.getFieldProps("about")}
                className={styles.input_text}
                name="about"
              />
              {formik.errors.about && formik.touched.about ? (
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.about}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <ChatBubbleBottomCenterIcon
                    height={25}
                    width={25}
                    color={"#845CFF"}
                  />
                </span>
              )}
            </div>
            <div
              className={`${styles.input_group} ${
                formik.errors.zip && formik.touched.zip
                  ? "border-rose-600"
                  : "border-violet-600"
              }`}
            >
              <input
                type="number"
                placeholder="Zip Code"
                {...formik.getFieldProps("zip")}
                className={styles.input_text}
                name="zip"
                value={''}
              />
              {formik.errors.zip && formik.touched.zip ? (
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.zip}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <GiZipper size={25} color={"#845CFF"} />
                </span>
              )}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.city && formik.touched.city
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.city}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <FaCity size={25} color={"#845CFF"} />
                </span>
              )}
            </div>

            <div
              className={`${styles.input_group} ${
                formik.errors.state && formik.touched.state
                  ? "border-rose-600"
                  : "border-violet-600"
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
                <div className="my-auto mr-1 text-[16px] text-rose-500">
                  <span className="text-[16px] text-rose-500">
                    {formik.errors.state}
                  </span>
                </div>
              ) : (
                <span className="icon flex items-center px-4">
                  <GlobeAsiaAustraliaIcon
                    height={25}
                    width={25}
                    color={"#845CFF"}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="mx-auto mt-4 w-2/4">
            <button
              type="submit"
              className={`${styles.button_custom} mx-1 rounded-full bg-violet-500 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-700 hover:shadow-lg focus:bg-violet-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-900 active:shadow-lg`}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default MyForm;
