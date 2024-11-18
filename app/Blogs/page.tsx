import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
export default function BlogsMain() {
  const engineeringFields = [
    {
      name: "Software Engineering",
      href: "/Blogs/Software_Engineering",
      color: "bg-rose-400",
      imageUrl: "/assets/blogs9E/BlogsSoftware.png",
    },
    {
      name: "Mechanical Engineering",
      href: "/Blogs/Mechanical_Engineering",
      color: "bg-cyan-300",
      imageUrl: "/assets/blogs9E/blogsMechanical.png",
    },
    {
      name: "Nano Engineering",
      href: "/Blogs/Nano_Engineering",
      color: "bg-teal-300",
      imageUrl: "/assets/blogs9E/BlogsNano.png",
    },
    {
      name: "Environmental Engineering",
      href: "/Blogs/Environmental_Engineering",
      color: "bg-pink-400",
      imageUrl: "/assets/blogs9E/blogsEnvironmental.png",
    },
    {
      name: "Electrical Engineering",
      href: "/Blogs/Electrical_Engineering",
      color: "bg-fuchsia-400",
      imageUrl: "/assets/blogs9E/blogsElectrical.png",
    },
    {
      name: "Aerospace Engineering",
      href: "/Blogs/Aerospace_Engineering",
      color: "bg-blue-400",
      imageUrl: "/assets/blogs9E/blogsAerospace.png",
    },
    {
      name: "Civil Engineering",
      href: "/Blogs/Civil_Engineering",
      color: "bg-sky-400",
      imageUrl: "/assets/blogs9E/blogsCivil.png",
    },
    {
      name: "Biomedical Engineering",
      href: "/Blogs/Biomedical_Engineering",
      color: "bg-emerald-400",
      imageUrl: "/assets/blogs9E/BlogsBiomedical.png",
    },
    {
      name: "Chemical Engineering",
      href: "/Blogs/Chemical_Engineering",
      color: "bg-rose-300",
      imageUrl: "/assets/blogs9E/blogsChemical.png",
    },
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h3 className="text-orange-500 text-xl font-semibold mb-2">
            &quot;Young Engineers Mongolia&quot;
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">
            9E for the Future
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад
            чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. Долоо хоног бүр
            тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр
            болгон вебсайтаа шалгаж байгаарай!
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringFields.map((field) => (
            <Link key={field.name} href={field.href} className="group">
              <div
                className={`${field.color} rounded-lg shadow-lg overflow-hidden transform transition duration-300 group-hover:scale-105 group-hover:shadow-xl relative`}
              >
                <Image
                  src={field.imageUrl}
                  alt="example"
                  width={500}
                  height={500}
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 "
                ></Image>
                <div className="p-6 flex flex-col items-center justify-center h-full min-h-[200px] relative z-10">
                  <BookOpen className="w-12 h-12 mb-4 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  <h2 className="text-xl font-semibold text-white text-center group-hover:underline">
                    {field.name}
                  </h2>
                  <ArrowRight className="w-6 h-6 mt-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
