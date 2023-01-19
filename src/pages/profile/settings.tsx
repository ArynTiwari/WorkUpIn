import React from 'react'
import { getSession, GetSessionParams, useSession } from 'next-auth/react'
type Props = {}
import Setting from '../../components/User/Settings'
const Settings = (props: Props) => {
  const { data: session } = useSession();

  return (
    <Setting/>
  )
}

export default Settings
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