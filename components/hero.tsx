import Link from "next/link"

 interface Props{
    heading:string,
    message:string
}
export default function hero({heading,message}:Props) {
   
  return (
    <section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img">
        <div className="absolute  top-0 left-0 right 0 bottom-0 bg-black/70 z-[2]"/>
        <div className="p-5 text-white z-[2] mt-[-10rem]">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl">{message}</p>
            <Link href={"/"}>
              <button className="px-8 py-2 border">Here</button>
            </Link>
        </div>
    </section>
  )
}
