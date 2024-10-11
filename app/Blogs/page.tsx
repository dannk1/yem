import Link from "next/link"; 

const BlogsMain = () => { 
  return ( 
    <article className="w-full flex flex-col items-center text-white gap-14 px-4 md:px-8 lg:px-12"> 
      <section className="w-full pt-32 flex flex-col items-center gap-12"> 
        <div className="w-[80%] flex flex-col justify-center"> 
          <h3 className="text-[#ff8d23] text-2xl font-semibold"> 
            "Young engineers Mongolia" 
          </h3> 
          <h1 className="text-4xl font-bold mt-5 mb-3 text-slate-700">9E for the Future</h1> 
          <p className="text-md text-slate-700 leading-4"> 
            Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр болгон вебсайтаа шалгаж байгаарай! 
          </p> 
        </div> 

        <div className="flex flex-row items-center justify-center flex-wrap gap-12"> 
          <Link href="/Blogs/Software_Engineering" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-rose-400"> 
              Software engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/Mechanical_Engineering" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-cyan-300"> 
              Mechanical engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/Nano_Engineering" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-teal-300"> 
              Nano engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-pink-400"> 
              Engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-fuchsia-400"> 
              Engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-blue-400"> 
              Engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-sky-400"> 
              Engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-emerald-400"> 
              Engineering 
            </div> 
          </Link> 
          <Link href="/Blogs/" className="w-full md:w-[30%] sm:w-[45%]"> 
            <div className="w-full aspect-square flex justify-center items-center hover:scale-105 duration-300 hover:bg-opacity-90 rounded-md bg-rose-300"> 
              Engineering 
            </div> 
          </Link> 
        </div> 
      </section> 
    </article> 
  ); 
}; 

export default BlogsMain;
