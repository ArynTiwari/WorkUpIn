import React from 'react'
import Image from 'next/image'
type Props = {}

const Author = (props: Props) => {
  return (
    <div className='flex py-5'>
      <Image
        src={`/assets/talent.png`}
        height={60}
        width={60} alt={''}      />
      <div className="flex flex-col">
        <span>Name of author</span>
        <span>designation</span>
      </div>

    </div>
  )
}
export default Author