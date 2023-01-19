import { getSession, GetSessionParams } from 'next-auth/react'
import React from 'react'
import Project from '../../components/Project/Project'
import { LogInfo } from '../../types'

type Props = {
  logged: LogInfo
}

const uploadProject = (logged: Props) => {
  return (
    <>
      {logged && (
        <Project />
      )}
    </>

  )
}
export default uploadProject
export async function getServerSideProps(context: GetSessionParams | undefined) {
  const logged = await getSession(context)
  if (!logged) {
    return {
      redirect: {
        destination: '/account/login',
        permanent: false,
      },
    }
  }

  return {
    props: { logged }
  }
}