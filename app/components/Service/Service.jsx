"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import ServiceText from '../Text/ServiceText'
const Service = () => {
  
  const businessInternationalizationData = [
    {
      "descriptions": [
        "Mediation with worldwide Cooperating Partners",
        "Worldwide Market Research",
        "Worldwide Business Relations",
        "Business Growth Assistance"
      ],
      "header": [
        "INTERNATIONALIZATION OF BUSINESS IN ALBANIA"
      ]
    },
    {
      "descriptions": [
        "New Co Establishment",
        "Administrative & Tax Support",
        "Legal Headquarters",
        "Accounting Balance Sheets"
      ],
      "header": [
        "INTERNATIONALIZATION OF BUSINESS IN ALBANIA"
      ]
    },
    {
      "descriptions": [
        "Worldwide Investment opportunities with elevated ROI and excellent Capital Appreciation"
      ],
      "header": [
        "INTERNATIONAL INVESTMENTS"
      ]
    },
  ];


  return (
    <div className='service h-screen mt-8 flex items-center justify-center' id='service'>
  <div className='flex flex-col items-center justify-center w-4/5 h-4/5 bg-black bg-opacity-40'>
    <p className='text-white text-2xl lg:text-8xl font-semibold'>OUR SERVICES</p>
    <div className='flex justify-center  flex-wrap p-2'>
       {businessInternationalizationData.map((dt,i)=> (
         <ServiceText dt={dt.descriptions} dth={dt.header}/>
       ))}
    </div>
    
    
  </div>
</div>

  )
}

export default Service