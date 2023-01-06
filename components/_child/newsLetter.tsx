
export default function newsLetter() {

  return (
    <div className='flex justify-center py-5 gap-3 mx-auto'>
        <input type="email" placeholder="your@email.com" className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-100
                            text-sm shadow placeholder-slate-500 ;
                              focus:outline-none focus:border-sky-500 focus:ring-sky-500" />
        <button className='p-2 mt-1 outline rounded text-sm text-white hover:text-black'>Subscribe</button>

    </div>

  )
}
