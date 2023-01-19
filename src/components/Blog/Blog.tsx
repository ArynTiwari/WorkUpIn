import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { env } from '../../env/client.mjs';
const Blog = () => {
    const { data: session, status } = useSession();
    // const SignupSchema = z.object().shape();
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            image: '',
            author: {
                userId: session?.user?.id,
                name: session?.user?.name
            },

        },
        // validationSchema:{SignupSchema},
        onSubmit
    })
    async function onSubmit(values: unknown) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }
        await fetch(`${env.NEXT_PUBLIC_URL}/api/blogs`, options)
            .then(res => res.json())
            .then((data) => {
                const { name } = data
                if (name) {
                    toast.error(`🦄${name}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.success('🦄 Blog posted Successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                    void router.push(`${env.NEXT_PUBLIC_URL}/profile`)
                }
                console.log(data)
            })

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
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-8 sm:px-12 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your own blog
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
                                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input type="text"  {...formik.getFieldProps('title')} name="title" placeholder='Title'
                                            className="w-full h-10 px-3 border-purple-400 border rounded-lg " />
                                    </div>
                                    <div className="col-span-12">
                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700">Description</label>

                                        <input
                                            type="text"
                                            placeholder='description'
                                            {...formik.getFieldProps('description')}
                                            className={`w-full px-3 border-purple-400 border rounded-lg `}
                                            name='description'

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
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog

// const {data,error} = useSWR()