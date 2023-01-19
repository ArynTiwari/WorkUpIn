import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { getSession, GetSessionParams, useSession } from 'next-auth/react'
import React from 'react'
import { Project,LogInfo } from '../../types'
interface Props  {
    project: Project,
    logged:LogInfo
}
const Project = ({logged ,project}:Props) => {
    const { data: session, status } = useSession();
    return (
        <>
            {session && status === 'authenticated' && logged && (
                <div className='mx-4'>
                    <div className='text-black-600 font-bold text-3xl mx-6 mt-4'>Project Details</div>
                    <div className="flex flex-col md:flex-row " >
                        <div className="flex flex-1">
                            <div className="px-6 py-4 mt-4 text-black ">
                                <div className="mb-2 text-2xl font-momo ">
                                    {project.title}
                                </div>
                                <p className=" text-base text-slate-500 text-0.5xl">
                                    {project.time}
                                </p>
                                <p className=" text-base text-slate-800 text-0.5xl pt-7">
                                    Worldwide
                                </p>
                                <hr className='stroke-2'></hr>
                                <p className=" text-base text-slate-800 text-0.5xl pt-3">
                                    Description: {project.description}
                                </p>
                                <p className=" text-base text-slate-800 text-0.5xl pt-3">
                                    <br></br>
                                    Category: {project.level}
                                </p>

                                <hr className='stroke-2'></hr>

                                <p className=" text-base text-slate-800 text-0xl pt-7 mr-7">
                                    {project.amount}
                                </p>
                                <p className=" text-base text-slate-500 text-0xl pr-7">
                                    Fixed price
                                </p>
                                <hr className='stroke-2 my-5'></hr>

                                <p className=" text-base text-slate-900 text-0xl mr-7">
                                    Project Type:  One-time project
                                </p>

                                <hr className='stroke-2 my-5'></hr>

                                <p className=" text-base text-neutral-900 text-0xl mr-7 mb-7">
                                    Skills Required
                                </p>

                                <div className='flex flex-row'>
                                    <button className="bg-slate-300 rounded-full px-3 py-1 pb-2 mr-5 hover:bg-sky-700">
                                        {project.category}
                                    </button>
                                   
                                </div>
                                <hr className='stroke-2 my-5'></hr>
                                <p className=" text-base text-black-900 text-0xl mr-7">
                                    Activity on this job
                                </p>
                                <br></br>

                                <p className=" text-base text-slate-500 text-0xl mr-7 mt-3">
                                    Proposals:  0
                                </p>
                                <p className=" text-base text-slate-500 text-0xl mr-7 mt-3">
                                    Last viewed by client:  0
                                </p>
                                <p className=" text-base text-slate-500 text-0xl mr-7 mt-3">
                                    Invites sent:  0
                                </p>
                                <p className=" text-base text-slate-500 text-0xl mr-7 mt-3">
                                    Interviews:  0
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="px-6 py-4 mt-4 text-black">
                                <div className='flex flex-col'>
                                    <button className="bg-green-500 truncate rounded-full px-14 py-1 pb-2 mx-3 hover:bg-violet-700 text-white">Submit Proposal</button>
                                    <button className="bg-green-500 rounded-full px-14 py-1 pb-2 mx-3 hover:bg-violet-700 mt-5 text-white">
                                        Save Job
                                    </button>
                                </div>
                                <p className=" text-base text-black-900 text-0xl ml-5 mt-5">
                                    Flag as inappropriate
                                </p>
                                <p className=" text-base text-slate-700 text-0xl ml-5 mt-3">
                                    Send a proposal for: 2 Connects
                                    <br></br>
                                    Available Connects: 50
                                </p>
                                <hr className='stroke-2 my-5'></hr>
                                <p className="text-black-900 text-3xl ml-5 mt-5">
                                    About the client
                                </p>
                                <p className=" text-base text-black-900 text-2.5xl ml-5 mt-5">
                                    Name :{project.user.name}
                                </p>
                                <p className=" text-base text-slate-500 text-2.5xl ml-5 mt-1">
                                    0.00 of 5 reviews
                                </p>
                                <p className=" text-base text-black-900 text-0px ml-5 mt-7">
                                    India
                                </p>
                                <p className=" text-base text-slate-500 text-0px ml-5">
                                    Pune 4:59pm
                                </p>
                                <p className=" text-base text-slate-500 text-0px ml-5 mt-3">
                                    Member since Nov 13, 2021
                                </p>
                                <hr className='stroke-2 my-5'></hr>
                                <p className="text-black-900 text-3xl ml-5 mt-7">
                                    Profile Link
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white-500 border-1   rounded-2xl  border-transparent lg:mr-24 lg:ml-24 mt-3" >
                        <div className="border-none rounded overflow-hidden shadow-lg">
                            <div className="px-6 py-4 mt-4 text-black ">
                                <div className=" text-xl mb-2 text-3.5xl font-bold font-momo ">
                                    Client recent history (5)
                                </div>
                                <p className=" text-bolder text-sky-900 text-2xl mt-5">
                                    I have android app, I want to upload my app from your google console account.
                                </p>
                                <p className=" text-base text-slate-600 text-1.5xl">
                                    Work in progress
                                </p>
                                <p className=" text-base text-sky-600 text-0.5xl">
                                    Freelancer Mohamed R.
                                </p>
                                <p className=" text-bolder text-sky-900 text-2xl mt-5">
                                    I have android app, I want to upload my app from your google console account.
                                </p>
                                <p className=" text-base text-slate-600 text-1.5xl">
                                    Work in progress
                                </p>
                                <p className=" text-base text-sky-600 text-0.5xl">
                                    Freelancer 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    )
}
export default Project
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const logged = await getSession(context as GetSessionParams)
    if (!logged) {
        return {
            redirect: {
                destination: '/account/login',
                permanent: false,
            },
        }
    }
    const projectId = context?.query.projectId
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/projects/${projectId}`
    )   
    return {
        props: {
            project: res.data,
            logged: logged,
        },
    };
};

