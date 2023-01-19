import { getSession, GetSessionParams } from 'next-auth/react'
import React from 'react'
import { env } from '../../env/client.mjs'
type Props = {}
const userBlogs = (user: any) => {
    console.log(user)
    return (
        <>
            <div>userBlogs</div>
            <h1>{user.title}</h1>
        </>
    )
}
export default userBlogs
export const getServerSideProps = async (ctx: GetSessionParams) => {
    const user = await getSession(ctx)
    const userId = user?.user?.id
    const res = await fetch(`${env.NEXT_PUBLIC_URL}/api/user/blogs/${userId}`,{
        method:'GET'
    })
    const userData = await res.json();
    return {
        props: {
            user: userData,
        },
    };
};