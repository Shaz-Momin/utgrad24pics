import React from 'react'

const Credits = () => {
  return (
    <div className="h-1/2 border border-t-2 p-16 flex flex-col items-center">
        <h1 className="text-2xl uppercase font-light tracking-wide">Special thanks to <a href='https://www.instagram.com/waitthatsaarish' className="stylish normal-case text-4xl">Aarish Rajwani</a></h1>
        <div className="text-lg font-extralight w-[36rem] p-4 mb-12 text-slate-700 italic">for capturing my senior pictures at UT Austin. It was such a special time in my life, and his expertise helped me commemorate it perfectly. Aarish made the whole experience so much fun and relaxed, and I absolutely love the way the photos turned out! Thank you again for everything!</div>
        <div className='footer flex items-center text-sm text-gray-500 mt-4'>
            Developed by Shaz Momin | Photos by: Aarish Rajwani | © 2024 Shaz Momin, All Rights Reserved
        </div>
    </div>
  )
}

export default Credits