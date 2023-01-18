import React from 'react'

type Props = {}

const PublicProfile = (props) => {
  return (
    <section className='profile flex flex-col'>
      <div>
        {children}
      </div>
    </section>
  )
}

export default PublicProfile