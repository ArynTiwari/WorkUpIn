import { getSession, GetSessionParams, useSession } from "next-auth/react"
import React from "react";
import Link from "next/link";
export default function Admin(email: any) {
  const { data: session, status } = useSession({ required: true });
  console.log(session)
  return (
    <>
      {session && email && (
        <>
         <div className="flex flex-col">
         <Link href={`/admin/dashboard/project`}>Project Dashboard</Link>
          <Link href={`/admin/dashboard/blog`}>Blogs Dashboard</Link>
          <Link href={`/admin/dashboard/talent`}>Talent Dashboard</Link>
          <Link href={`/admin/dashboard/client`}>Client Dashboard</Link>
         </div>
        </>
      )}
    </>
  )
}




export async function getServerSideProps(context: GetSessionParams | undefined) {
  const logged = await getSession(context)
  const email = logged?.user?.email
  if (email != process.env.ADMIN_EMAIL) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    }
  }

  return {
    props: { email }
  }
}