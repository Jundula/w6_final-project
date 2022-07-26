import Image from 'next/image'
import React from 'react'
import white from '../images/1.png'

function Skeleton() {
  return (
    <div className=' m-4 relative h-80 w-60'>
      <Image
          src={white}
          layout="fill"
          objectFit="cover"
          className="rounded-lg  "
        />
    </div>
  )
}

export default Skeleton