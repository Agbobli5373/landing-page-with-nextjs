import InstagramImg from "./_child/instagramImg"

export default function instagram() {
  return (
    <section className="max-w-[1240] mx-auto text-center py-4">
        <p className="text-2xl font-bold">Follow me on Instagram</p>
          <p className="pb-4">@ayuba</p>
          <div className="grid grid-cols-2 md:grid-clos-3 gap-2 p-4">
           <InstagramImg sociolImag={"/images/IMG_0301.jpg"} />
           <InstagramImg sociolImag={"/images/IMG_9922.jpg"} />
           <InstagramImg sociolImag={"/images/IMG_0059.jpg"} />
           <InstagramImg sociolImag={"/images/IMG_0061.jpg"} />
          </div>

    </section>
  )
}
