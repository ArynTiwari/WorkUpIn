import { useFormik } from "formik";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import router from "next/router";
import React from "react";
import { env } from "../../env/client.mjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Project = () => {
  const { data: session } = useSession();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      time: "",
      createdAt: new Date().toISOString(),
      category: "",
      level: "",
      amount: "",
    },
    onSubmit,
  });
  async function onSubmit(values: never) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch(`${env.NEXT_PUBLIC_URL}/api/projects`, options)
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
          toast.success("🦄 Project posted Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        }
        function redirect() {
          router.push(`${process.env.NEXT_PUBLIC_URL}/profile`);
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
      <div className="flex h-2/4 items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your own Project
            </h2>
            <p className="mt-2 text-center text-sm font-medium  text-purple-600 hover:text-indigo-500">
              Write to inspire
            </p>
          </div>
          <div className=" max-w-md overflow-hidden rounded bg-white p-5 shadow-xl">
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="-space-y-px rounded-md shadow-sm">
                <div className="grid gap-6">
                  <div className="col-span-12">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      {...formik.getFieldProps("title")}
                      name="title"
                      placeholder="Title"
                      className="h-10 w-full rounded-lg border border-purple-400 px-3 "
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="des"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="description"
                      {...formik.getFieldProps("description")}
                      className={`w-full rounded-lg border border-purple-400 px-3 `}
                      name="description"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="des"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Time
                    </label>
                    <input
                      type="text"
                      placeholder="time"
                      {...formik.getFieldProps("time")}
                      className={`w-full rounded-lg border border-purple-400 px-3 `}
                      name="time"
                    />
                  </div>

                  <div className="col-span-12">
                    <label
                      htmlFor="des"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      placeholder="category"
                      {...formik.getFieldProps("category")}
                      className={`w-full rounded-lg border border-purple-400 px-3 `}
                      name="category"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="des"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Level
                    </label>
                    <input
                      type="text"
                      placeholder="level"
                      {...formik.getFieldProps("level")}
                      className={`w-full rounded-lg border border-purple-400 px-3 `}
                      name="level"
                    />
                  </div>
                  <div className="col-span-12">
                    <label
                      htmlFor="des"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      placeholder="amount"
                      {...formik.getFieldProps("amount")}
                      className={`w-full rounded-lg border border-purple-400 px-3 `}
                      name="amount"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>

                  {/* <div className="col-span-12">
                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                                        <input type="file" name="img" id="img"
                                            className="w-full border rounded-lg" />
                                    </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
