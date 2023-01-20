import { useFormik } from "formik";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { env } from "../../env/client.mjs";
import z from "zod";
const Blog: React.FC = () => {
  const router = useRouter();
  const mutation = api.blogs.add.useMutation({});
  // const BlogSchema = z.object({
  //     title : z.string().min(5),
  //     desc : z.string(),

  // })
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      // authorId: "63c77ef04064f6fb07ca6590",
      createdAt: new Date(),
      category: "",
    },
    // validationSchema:{BlogSchema},
    onSubmit,
  });
  async function onSubmit(values: {
    title: string;
    desc: string;
    // authorId: string;
    createdAt: Date;
    category: string;
  }) {
    await mutation
      .mutateAsync(values)
      .then((result) =>
        toast.success("🦄 Blog posted Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })
      )
      .catch((error) =>
        toast.error(`🦄 ${error as string} `, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        })
      );
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
      <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-8 sm:px-12 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your own blog
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
                      htmlFor="desc"
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
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      {...formik.getFieldProps("category")}
                      name="category"
                      placeholder="Category"
                      className="h-10 w-full rounded-lg border border-purple-400 px-3 "
                    />
                  </div>
                  {/* <div className="col-span-12">
                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
                                        <input type="file" name="img" id="img"
                                            className="w-full border rounded-lg" />
                                    </div> */}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
