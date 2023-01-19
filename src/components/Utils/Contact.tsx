import React from "react";
import Image from "next/image";
import { contact } from "../assets/images/index";
import Button from "./Button";
import styles from "../styles/Form.module.css";
import { useFormik } from "formik";
import { validateContact } from "../src/validate";
import router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { HiAtSymbol } from "react-icons/hi";
type Props = {};
interface FormValues {
  email: string;
  name: string;
  query: string;
}
const navigation = [
  { name: "Email", type: "email" },
  { name: "Name", type: "text" },
  { name: "Query", type: "text" },
];
const Contact = (props: Props) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      name: "",
      query: "",
    },
    validate: validateContact,
    onSubmit,
  });
  async function onSubmit(values: any) {
    
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
      <section className="my-8 mx-2 md:mx-6 lg:mx-12  flex flex-col justify-around">
        <div className="text-center p-4">
          <h1 className="text-2xl">Contact Us for any query!</h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 justify-center">
          <div className="hidden lg:flex">
            <Image src={contact} alt="contactImage" />
          </div>
          <div className="items-center justify-center lg:max-w-[700px] grid grid-cols-1">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col items-center gap-2"
            >
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className={`p-2 ${styles.input_group} ${
                    formik.errors.email && formik.touched.email
                      ? "border-rose-600"
                      : " "
                  }`}
                >
                  <input
                    type={item.type}
                    {...formik.getFieldProps(item.name)}
                    name={item.name}
                    placeholder={item.name}
                    className={styles.input_text}
                  />
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </div>
              ))}

              <Button title="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
