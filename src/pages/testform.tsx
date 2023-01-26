import React from "react";
import { useFormik } from "formik";
import { fields } from "../utils/constants";
import styles from "../styles/Form.module.css";
import { HiOutlineUser } from "react-icons/hi";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      cpassword: "",
      role: "",
      about: "",
      gender: "",
      zip: null,
      city: "",
      state: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
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
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div
            className={`${styles.input_group as string} ${
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
        </div>
      </form>
    </section>
  );
};
export default SignupForm;
