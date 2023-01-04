import Image  from "next/image";
export default function portfolio() {
  return (
    <section id="#portfolio" className="max-w-[1240px] mx-auto py-16 text-center">
        <h1 className=" font-bold tex-2xl p-4">Fun Places</h1>
        <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
            <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
              <Image 
                 src={"/images/IMG_0301.jpg"} 
                 alt="/"
                 layout="reponsive"
                 width={677}
                 height={451}
                 />     
            </div>
            <div className="w-full h-ful">
            <Image 
                 src={"/images/IMG_0061.jpg"} 
                 alt="/"
                 layout="reponsive"
                 width={215}
                 height={217}
                 object-Fit="cover"
                 />
            </div>
            <div className="w-full h-ful">
            <Image 
                 src={"/images/IMG_9921.jpg"} 
                 alt="/"
                 layout="reponsive"
                 width={215}
                 height={217}
                 object-Fit="cover"
                 />
            </div>
            <div className="w-full h-ful">
            <Image 
                 src={"/images/IMG_9975.jpg"} 
                 alt="/"
                 layout="reponsive"
                 width={215}
                 height={217}
                 object-Fit="cover"
                 />
            </div>
            <div className="w-full h-ful">
            <Image 
                 src={"/images/IMG_9922.jpg"} 
                 alt="/"
                 layout="reponsive"
                 width={215}
                 height={217}
                 object-Fit="cover"
                 />
            </div>

        </div>

    </section>
  )
}
