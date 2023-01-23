import { useFormik } from "formik";
import router from "next/router";
import React from "react";
import { env } from "../../env/client.mjs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../utils/api";
const CreateProject = () => {
  const mutation = api.projects.add.useMutation({});
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      time: "",
      createdAt: new Date(),
      category: "",
      level: "",
      amount: "",
    },
    onSubmit,
  });
  async function onSubmit(values: {
    title: string;
    desc: string;
    time: string;
    createdAt: Date;
    category: string;
    level: string;
    amount: string;
  }) {
    await mutation
      .mutateAsync(values)
      .then((result) => {
        toast.success(`🦄${result.title} posted Successfully! `, {
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
      <div className="flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your own Project
            </h2>
            <p className="mt-2 text-center text-sm font-medium  text-purple-600 hover:text-indigo-500">
              Write the details of your project
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
                      {...formik.getFieldProps("desc")}
                      className={`h-10 w-full rounded-lg border border-purple-400 px-3 `}
                      name="desc"
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
                      className={`h-10 w-full rounded-lg border border-purple-400 px-3 `}
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
                      className={`h-10 w-full rounded-lg border border-purple-400 px-3 `}
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
                      className={`h-10 w-full rounded-lg border border-purple-400 px-3 `}
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
                      className={`h-10 w-full rounded-lg border border-purple-400 px-3 `}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
