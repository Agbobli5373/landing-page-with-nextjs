import Link from "next/link" ;
import NewsLetter from "./_child/newsLetter";
import {FaYoutube,FaFacebook,FaTwitter,FaWhatsapp} from "react-icons/fa" ;
export default function footer() {
  return (
    <div className="bg-gray-500 mx-auto py-10 shadow flex flex-col justify-center items-center">
      <NewsLetter/>
      <div className="w-96 order-3 flex justify-center">
           <div className="flex gap-6">
           <Link href={"/"}><FaFacebook color="#ffffff"/></Link>
           <Link href={"/"}><FaTwitter color="#ffffff"/> </Link>
           <Link href={"/"}><FaYoutube color="#ffffff"/> </Link>
           <Link href={"/"}><FaWhatsapp color="#ffffff"/> </Link>
           </div>
         </div>
    </div>
  )
}
