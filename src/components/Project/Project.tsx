import { useFormik } from "formik";
import { getSession, GetSessionParams, useSession } from "next-auth/react";
import router from "next/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateProjects } from "../../src/validate";

const Project = () => {
  const { data: session } = useSession();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      user: session?.user?.id,
      time: "",
      createdAt: new Date().toISOString(),
      category: "",
      level: "",
      amount: "",
    },
    validate: validateProjects,
    onSubmit,
  });
  async function onSubmit(values: any) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, options)
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
      <div className="h-2/4 flex items-center justify-center bg-gray-50 py-12">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your own Project
            </h2>
            <p className="mt-2 text-center text-sm font-medium  text-purple-600 hover:text-indigo-500">
              Write to inspire
            </p>
          </div>
          <div className=" bg-white max-w-md rounded overflow-hidden shadow-xl p-5">
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
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
                      className="w-full h-10 px-3 border-purple-400 border rounded-lg "
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
                      className={`w-full px-3 border-purple-400 border rounded-lg `}
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
                      className={`w-full px-3 border-purple-400 border rounded-lg `}
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
                      className={`w-full px-3 border-purple-400 border rounded-lg `}
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
                      className={`w-full px-3 border-purple-400 border rounded-lg `}
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
                      className={`w-full px-3 border-purple-400 border rounded-lg `}
                      name="amount"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
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
