import Image from "next/image";
import Photo from "@/public/assets/IMG_7818.jpg";
const Academy = () => {
  return (
    <section className="w-full flex flex-col gap-9 items-center justify-center text-white">
      <div className="w-[80%] mt-32 ">
        <h1 className="text-[#ff8d23] text-2xl font-semibold">
          “Young Engineers Program”{" "}
        </h1>
        <h3 className="mt-3 text-sm text-slate-700 leading-4\5">
          “Young Engineers Program” төсөл нь 7 хоног бүр салбар бүрийн хүндэт
          инженерүүдийг зочин илтгэгчээр урин, оролцогчиддоо чанартай
          боловсролыг олгосон. Мөн оролцогчдыг 3 баг болгон хувааж, нийгэмд
          нөлөөлсөн багийн төслүүдийг нь хөгжүүлсэн ба оролцогчид маань
          хөтөлбөрөөс сурсан зүйлсээ хуваалцах нийт 3 удаагийн сургалтуудыг
          ЕБС-ийн сурагчдад орсон.
        </h3>
      </div>
      <section className="w-[80%] flex flex-row flex-wrap items-start gap-0 gap-y-8">
        <div className="w-full flex flex-col gap-2 md:p-4 items-center justify-center md:items-start relative left-0">
          <Image
            className=" rounded-sm w-full  aspect-auto bg-slate-100"
            src={Photo}
            alt="project cover photo"
          />
          <header className="text-3xl w-full">Young Engineers Academy</header>
          <p className="w-full md:w-[90%]">
            “Young Engineers Program” төсөл нь 2024 оны 2-оос 4 сарын хооронд 2
            сарын хугацаанд 18 оролцогчидтойгоор хэрэгжсэн бөгөөд 7 хоног бүр
            салбар бүрийн хүндэт инженерүүдийг зочин илтгэгчээр урин,
            оролцогчиддоо чанартай боловсролыг олгосон. Мөн оролцогчдыг 3 баг
            болгон хувааж, нийгэмд нөлөөлсөн багийн төслүүдийг нь хөгжүүлсэн ба
            оролцогчил маань хөтөлбөрөөс сурсан зүйлсээ хуваалцах нийт 3
            удаагийн сургалтуудыг ЕБС-ийн сурагчдад орсон. Энэхүү хөтөлбөрийн
            “American Corner Ulaanbaatar” байгууллага, Нэгдсэн Үндэсний
            Байгууллага болон НҮБ-ийн Залуучуулын Зөвлөх Хороотой хамтран
            хэрэгжүүлсэн.
          </p>
          <p className="w-full md:w-[90%]">
            7 хоног болгоны инженерийн илтгэл Бид 7 зочин илтгэгч нарыг урин
            нийт 22 цагийн сургалтыг зохион байгуулсан. Үүнд “What is
            Engineering?”, “Environmental Engineering”, “Design thinking”,
            “Nanoengineering”, “Biochemical Engineering”, “Giving speech 101”,
            “How to prepare for college application?” гэх сэдвүүд багтсан.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Academy;
