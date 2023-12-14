import React from 'react'

export const ShimmerCard = () => {
  return (
    <>
    {
        Array(18).fill("").map(() => (
            <div className='animate-pulse w-72 h-62 rounded-md flex flex-column overflow-hidden'>
            <div className='bg-gray-200 w-72 h-44 rounded-md overflow-clip '>
            </div>
                <div className="flex flex-column flex-wrap gap-1 mt-1 py-2">
                    <p className="font-extrabold text-xl w-48 h-2 bg-gray-200 rounded-md"></p>
                    <p className="w-24 h-2  bg-gray-200 rounded-md"></p>
                    <p className=" font-thin w-72 h-2 bg-gray-200 rounded-md"></p>
                </div>
            </div>
        ))
    }
    </>
  )
}

export const ShimmerCircle = () => {
  return (
    <>
      {
        Array(8).fill("").map(() => (
          <div className='animate-bounce flex justify-around m-4'>
            <div className='bg-gray-200 rounded-full w-20 h-20'>

            </div>
          </div>

        ))
      }
    </>
  )
}