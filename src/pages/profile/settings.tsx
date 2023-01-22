import { useSession } from 'next-auth/react';
import React from 'react'
import Setting from '../../components/User/Settings'
const Settings = (props: Props) => {
  const { data: session } = useSession();

  return (
    <Setting/>
  )
}

export default Settings
