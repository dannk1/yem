import Paragraph from "@/components/paragraph";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Background from "@/public/assets/bg_resized_logo.png";

export default function LandingPage() {
  const paragraphContexts = [
    {
      number: "01",
      head: "ҮЕМ гэж юу вэ?",
      para: '"Young Engineers Mongolia" байгууллага нь 2024 онд байгуулагдсан, төрийн бус залуучуудын байгууллага юм. Манай байгууллагын гол тэмдэгт нь "9E" буюу 9 инженерчлэлийн салбарыг залуучуудад онцлон, мэдлэг олгох төрөл бүрийн сувгуудыг бүтээх төслүүд хэрэгжүүлдэг. <br>"YEM" байгууллагын алсын хараа нь ирээдүйн Монголын инженерчлэл, шинжлэх ухаан, технологийн ажлын хүчийг нэмэгдүүлэх юм. Энэхүү зорилгын хүрээнд бид үйл ажиллагаагаа залуучууд руу чиглүүлж, тэдэнд зориулсан 9 инженерчлэлийн төрлөөр өдөрлөг, сургалт, хөтөлбөр, блогуудыг бүтээдэг.',
      btnDisplay: false,
      imagesrc: "/assets/mainPage/YEM.png",
    },
    {
      number: "02",
      head: "Төслүүд",
      para: '"Young Engineers Academy" төсөл нь одоогоор манай байгууллагын хамгийн том төсөл бөгөөд нийт 50 гаруй ажиллах хүчний багтайгаар хэрэгжиж байна. Энэхүү төсөл нь "9E" буюу 9 инженерчлэлийн салбарыг нийтэд таниулан суртачилах гол зорилготой бөгөөд уг зорилгын хүрээнд 1 том хэмжээний эвент, 2 workshop, 72 блог, 51 цахим контент тус тус хийсэн билээ. <br> "Young Engineers Program" төсөл нь 7 хоног бүр салбар бүрийн хүндэт инженерүүдийг зочин илтгэгчээр урин, оролцогчиддоо чанартай боловсролыг олгосон. Мөн оролцогчдыг 3 баг болгон хувааж, нийгэмд нөлөөлсөн багийн төслүүдийг нь хөгжүүлсэн ба оролцогчид маань хөтөлбөрөөс сурсан зүйлсээ хуваалцах нийт 3 удаагийн сургалтуудыг ЕБС-ийн сурагчдад орсон.',
      btnDisplay: true,
      imagesrc: "/assets/mainPage/tusluud.png",
    },
    {
      number: "03",
      head: "Блог",
      para: "Бид 9E-ээр буюу 9 инженерчлэлийн чиглэлийн хүрээнд залуучуудад чанартай бөгөөд уншихад хялбар блогуудыг бичиж оруулдаг. 7 хоног бүр тогтмол хуваарьтайгаар блогууд маань орж байгаа тул та бүхэн өдөр болгон вебсайтаа шалгаж байгаарай!",
      btnDisplay: true,
      imagesrc: "/assets/mainPage/Blog.png",
    },
  ];

  return (
    <main className="w-full h-auto flex flex-col items-center text-slate-700 pt-16">
      <Navbar />
      <header className="w-full h-screen flex flex-col justify-center items-center text-center gap-3 mb-24 md:mb-20 relative">
        <Image
          src={Background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="z-10 flex flex-col justify-center items-center text-white h-full w-full  ">
          <section className="w-auto flex flex-col justify-center items-center gap-3 pt-[350px]">
            <h1 className="text-[40px]">Young Engineers Mongolia</h1>
            <h3 className="w-[90%] text-base text-balance md:text-center">
              Young Engineers Mongolia нь 2024 онд байгуулагдсан. Ирээдүйн
              Монголын инженерүүдийг бэлтгэх зорилготой төрийн бус байгууллага
              юм
            </h3>
            <button className="w-auto h-auto px-4 py-2 text-base bg-[#ff8d23] text-[#fff5ee] mt-4 rounded-md hover:scale-[1.05] duration-300">
              Илүү ихийг харах
            </button>
          </section>
        </div>
      </header>
      <article
        id="display"
        className="w-full h-auto flex flex-col items-center justify-center gap-8"
      >
        {paragraphContexts.map((context) => (
          <Paragraph
            key={context.number}
            number={context.number}
            head={context.head}
            para={context.para}
            displayBtn={context.btnDisplay}
            imagesrc={context.imagesrc}
          />
        ))}
      </article>
    </main>
  );
}
