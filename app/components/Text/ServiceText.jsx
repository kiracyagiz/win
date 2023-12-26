import React from 'react'

const ServiceText = ({dt,dth}) => {
  return (
    <div className='text-white items-center  gap-x-4 flex gap-y-8 p-4'>
    <div class=" w-0.5  h-4/5   bg-white"></div>

        <div className=''>
        {dth.map((dt,i)=> (
                  <li className=' text-lg lg:text-2xl max-w-lg   list-none' key={i}>{dt}</li>

        ))}
        {dt.map((dt,i)=> (
        <li className='text-sm lg:text-md max-w-md' key={i}>{dt}</li>
          
        ))}

        </div>
    </div>
  )
}

export default ServiceText