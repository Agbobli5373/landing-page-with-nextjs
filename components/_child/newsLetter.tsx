import React from 'react'

export default function newsLetter() {
  return (
    <div className='flex flex-col justify-center py-5 gap-3'>
        <input type="email" placeholder="" className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-100
                              rounded-full text-sm shadow placeholder-slate-500 ;
                              focus:outline-none focus:border-sky-500 focus:ring-sky-500" />
        <button className='p-2 outline text-white'>Subscribe</button>
    </div>

  )
}
