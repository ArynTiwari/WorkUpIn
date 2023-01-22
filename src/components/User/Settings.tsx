import { useFormik } from "formik";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import router from "next/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateProjects } from "../../src/validate";
import New_User from "../../components/User/New_User";

const Settings = ({ session }: any) => {
  return <New_User />;
};

export default Settings;

