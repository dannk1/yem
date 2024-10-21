import Paragraph from "@/components/paragraph";
import Logo from "@/public/assets/logo-yellow transparent.png";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const LandingPage = () => {
  const paragraphContexts = [
    {
      number: "01",
      head: "ҮЕМ гэж юу вэ?",
      para: "“Young Engineers Mongolia” байгууллага нь 2024 онд байгуулагдсан, төрийн бус залуучуудын байгууллага юм. Манай байгууллагын гол тэмдэгт нь “9E” буюу 9 инженерчлэлийн салбарыг залуучуудад онцлон, мэдлэг олгох төрөл бүрийн сувгуудыг бүтээх төслүүд хэрэгжүүлдэг.",
      btnDisplay: false,
    },
    {
      number: "02",
      head: "Төслүүд",
      para: "“YEM” байгууллагын алсын хараа нь ирээдүйн Монголын инженерчлэл, шинжлэх ухаан, технологийн ажлын хүчийг нэмэгдүүлэх юм. Энэхүү зорилгын хүрээнд бид үйл ажиллагаагаа залуучууд руу чиглүүлж, тэдэнд зориулсан 9 инженерчлэлийн төрлөөр өдөрлөг, сургалт, хөтөлбөр, блогуудыг бүтээдэг.",
      btnDisplay: true,
    },
    {
      number: "03",
      head: "Блог",
      para: "Судалгааны хэлтэс нь 9E-ээр 9 сэдвүүдийн дор нийт 81 блог бичсэн бөгөөд цахим хуудсанд эдгээр блогуудын мэдээллийг товчилсон ба хүмүүсийн нүдэнд туссан байдлаар блог постер болгон оруулсан. 10 сард дадлагажигч нар 9 мэргэжил бүрийн хүмүүстэй ярилцлага хийж тэд хэрхэн ажилладаг болон инженер болсон намтрыг нь хүмүүст сонирхуулсан блогуудыг бичсэн.",
      btnDisplay: true,
    },
  ];

  return (
    <main className="w-full h-auto flex flex-col items-center text-slate-700">
      <Navbar />
      <header
        className="w-full h-screen flex flex-col justify-center items-center text-center gap-3 mb-24 md:mb-20 first:border-t-1 first:border-slate-300"
        id="main_background_image"
      >
        <div className="flex bg-slate-700 flex-col justify-center items-center text-white h-screen w-screen">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="w-60 md:w-72 object-contain"
          />

          <section className="w-auto flex flex-col justify-center items-center gap-3 ">
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
        {paragraphContexts.map((context) => {
          return (
            <Paragraph
              key={context.number}
              number={context.number}
              head={context.head}
              para={context.para}
              displayBtn={context.btnDisplay}
            />
          );
        })}
      </article>
    </main>
  );
};

export default LandingPage;
