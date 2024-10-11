import ProjectPhoto_one from "/assets/IMG_0382.jpg";
import ProjectPhoto_two from "/assets/IMG_711v.jpg";
import ProjectPhoto_three from "/assets/IMG_7115.jpg";
import ProjectPhoto_four from "/assets/IMG_7832.jpg";
import Photo from "../../assets/IMG_7818.jpg";
import Image from "next/image";
const Projects = () => {
  return (
    <section className="w-full flex flex-col gap-9 items-center justify-center text-white">
      <div className="w-[80%] mt-32 ">
        <h1 className="text-[#ff8d23] text-2xl font-semibold">
          “Young Engineers Mongolia Projects ”{" "}
        </h1>
        <h3 className="mt-8 text-sm text-slate-700 leading-4\5 ">
          “Young Engineers Mongolia” байгууллага нь 2024 онд байгуулагдсан,
          төрийн бус залуучуудын байгууллага юм. Манай байгууллагын гол тэмдэгт
          нь “9E” буюу 9 инженерчлэлийн салбарыг залуучуудад онцлон, мэдлэг
          олгох төрөл бүрийн сувгуудыг бүтээх төслүүд хэрэгжүүлдэг.
        </h3>
        <h3 className="mt-3 text-sm text-slate-700 leading-4\5">
          “YEM” байгууллагын алсын хараа нь ирээдүйн Монголын инженерчлэл,
          шинжлэх ухаан, технологийн ажлын хүчийг нэмэгдүүлэх юм. Энэхүү
          зорилгын хүрээнд бид үйл ажиллагаагаа залуучууд руу чиглүүлж, тэдэнд
          зориулсан 9 инженерчлэлийн төрлөөр өдөрлөг, сургалт, хөтөлбөр,
          блогуудыг бүтээдэг.
        </h3>
      </div>
      <section className="w-[80%] flex flex-row flex-wrap items-start gap-0 gap-y-8 text-slate-700">
        <div className="w-full md:w-[50%] flex flex-col gap-2 md:p-4 items-center justify-center md:items-start relative left-0">
          <Image
            src={ProjectPhoto_one}
            alt="project cover photo"
            width={500}
            height={300}
            className="rounded-sm w-full md:w-[90%] aspect-auto bg-slate-100"
          />
          <header className="text-3xl w-full">Young Engineers Academy</header>
          <p className="w-full md:w-[90%]">
            “Young Engineers Academy” төслийн хүрээнд бид нийт 4 хэлтэст 4
            менежер болон 50 дадлагажигч шалгаруулан Цахим контент, Боловсролын
            сургалтууд, Блог буюу чанартай мэдээлэл бэлтгэх болон тэд нарыг
            нийтлэн, суртачилах Вебсайт хийсэн. Энэхүү төслийн гол зорилго нь
            “9E” буюу 9 инженерчлэлийн салбарыг нийтэд таниулан суртачилах
            зорилготой ба бид олон дэд төслүүдийг хэрэгжүүлсэн бөгөөд 1 том
            хэмжээний эвент, 2 workshop, 81 блог, 51 цахим контент тус тус
            хийсэн билээ.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-2 p-4 items-center justify-center md:items-start relative right-0">
          <Image
            src={ProjectPhoto_two}
            alt="project cover photo"
            width={500}
            height={300}
            className="rounded-sm w-full md:w-[90%] aspect-auto bg-slate-100"
          />
          <header className="text-3xl w-full">
            “9E for the Future” өдөрлөг
          </header>
          <p className="w-full md:w-[90%]">
            “Young Engineers Academy” төслийн хүрээнд бид нийт 4 хэлтэст 4
            менежер болон 50 дадлагажигч шалгаруулан Цахим контент, Боловсролын
            сургалтууд, Блог буюу чанартай мэдээлэл бэлтгэх болон тэд нарыг
            нийтлэн, суртачилах Вебсайт хийсэн. Энэхүү төслийн гол зорилго нь
            “9E” буюу 9 инженерчлэлийн салбарыг нийтэд таниулан суртачилах
            зорилготой ба бид олон дэд төслүүдийг хэрэгжүүлсэн бөгөөд 1 том
            хэмжээний эвент, 2 workshop, 81 блог, 51 цахим контент тус тус
            хийсэн билээ.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-2 p-4 items-center justify-center md:items-start relative left-0">
          <Image
            src={ProjectPhoto_four}
            alt="project cover photo"
            width={500}
            height={300}
            className="rounded-sm w-full md:w-[90%] aspect-auto bg-slate-100"
          />
          <header className="text-3xl w-full">Workshop</header>
          <p className="w-full md:w-[90%]">
            Бид төслийн хүрээнд “American Corner Ulaanbaatar” боловсролын
            байгууллагатай хамтран 2 удаагийн workshop-уудыг зохион байгуулсан.
            Workshop-ууд дээр “Инженерчлэл 101” буюу хэрхэн инженер болох,
            инженер болоход тохиромжтой хүний зан араншин гэх мэт ерөнхий
            ойлголтуудыг хүмүүст хүргэсэн ба дараагийн workshop дээр
            инженерчлэлийн хүрээнд их сургууль болон тэтгэлгийн цогц
            мэдээллүүдээр хангасан. Бид workshop хийхдээ дундуур нь оролцогчдын
            инженерчлэлийн сэтгэхүйг сорьсон хөгжөөнт тоглоомууд оролцуулсны нэг
            нь “Spaghetti tower” болон “Fun jeopardy” гэх тоглоомууд юм. Нийт
            130 гаруй оролцогчидтойгоор амжилттай хэрэгжүүлсэн.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-2 p-4 items-center justify-center md:items-start relative left-0">
          <Image
            src={ProjectPhoto_four}
            alt="project cover photo"
            width={500}
            height={300}
            className="rounded-sm w-full md:w-[90%] aspect-auto bg-slate-100"
          />
          <header className="text-3xl w-full">Блог</header>
          <p className="w-full md:w-[90%]">
            Судалгааны хэлтэс нь 9E-ээр 9 сэдвүүдийн дор нийт 81 блог бичсэн
            бөгөөд цахим хуудсанд эдгээр блогуудын мэдээллийг товчилсон ба
            хүмүүсийн нүдэнд туссан байдлаар блог постер болгон оруулсан. 10
            сард дадлагажигч нар 9 мэргэжил бүрийн хүмүүстэй ярилцлага хийж тэд
            хэрхэн ажилладаг болон инженер болсон намтрыг нь хүмүүст
            сонирхуулсан блогуудыг бичсэн.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col gap-2 p-4 items-center justify-center md:items-start relative left-0">
          <Image
            src={ProjectPhoto_four}
            alt="project cover photo"
            width={500}
            height={300}
            className="rounded-sm w-full md:w-[90%] aspect-auto bg-slate-100"
          />
          <header className="text-3xl w-full">Цахим контент</header>
          <p className="w-full md:w-[90%]">
            Бид 3 сарын хугацаанд цахим хаягууд дээрээ нийт 51 контент оруулсан
            бөгөөд сар болгон 30’000 хүнд хүрч ажиллан одоогоор нийт 2300
            дагагчидтайгаар идэвхтэй контентуудаа оруулж байна. Цахим контентийн
            нэг чухал хэсэн нь блог потстер ба үүний хүрээнд бид судалгааны
            хэлтсийн бичсэн блогуудыг точвлон, загварчлан маш чанартай мэдээлэл
            оруулдаг.
          </p>
        </div>
        {/* <div className='w-full flex flex-col gap-2 md:p-4 items-center justify-center md:items-start relative left-0'>
        <img className=' rounded-sm w-full  aspect-auto bg-slate-100' src={Photo} alt="project cover photo"  />
        <header className='text-3xl w-full'>Young Engineers Academy</header>
        <p className='w-full md:w-[90%]'>“Young Engineers Program” төсөл нь 2024 оны 2-оос 4 сарын хооронд 2 сарын хугацаанд 18 оролцогчидтойгоор хэрэгжсэн бөгөөд 7 хоног бүр салбар бүрийн хүндэт инженерүүдийг зочин илтгэгчээр урин, оролцогчиддоо чанартай боловсролыг олгосон. Мөн оролцогчдыг 3 баг болгон хувааж, нийгэмд нөлөөлсөн багийн төслүүдийг нь хөгжүүлсэн ба оролцогчил маань хөтөлбөрөөс сурсан зүйлсээ хуваалцах нийт 3 удаагийн сургалтуудыг ЕБС-ийн сурагчдад орсон. Энэхүү хөтөлбөрийн “American Corner Ulaanbaatar” байгууллага, Нэгдсэн Үндэсний Байгууллага болон НҮБ-ийн Залуучуулын Зөвлөх Хороотой хамтран хэрэгжүүлсэн.</p>
        <p className='w-full md:w-[90%]'>7 хоног болгоны инженерийн илтгэл
Бид 7 зочин илтгэгч нарыг урин нийт 22 цагийн сургалтыг зохион байгуулсан. Үүнд “What is Engineering?”, “Environmental Engineering”, “Design thinking”, “Nanoengineering”, “Biochemical Engineering”, “Giving speech 101”, “How to prepare for college application?” гэх сэдвүүд багтсан. 
   </p>
      </div> */}
      </section>
    </section>
  );
};

export default Projects;
