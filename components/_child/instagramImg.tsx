import Image  from "next/image" ;
import {FaInstagram} from "react-icons/fa";

interface Props {
    sociolImag:any ;
}
export default function instagramImg({sociolImag} :Props) {
  return (
    <section className="relative">
        <Image
           src={sociolImag}
           alt ="/"
           className="w-full h-full"
           layout="responsive"
           height={217}
           width={217}
           />
        <div className="flex justify-center w-full h-full  items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
            <p className="text-gray-300 hidden group-hover:block">
                <FaInstagram size={30} className="z-10"/>
            </p>
        </div>
    </section>
  )
}
