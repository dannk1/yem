import ProjectPhoto_one from "/assets/IMG_0382.jpg";
import ProjectPhoto_two from "/assets/IMG_711v.jpg";
import ProjectPhoto_four from "/assets/IMG_7832.jpg"; // Removed unused ProjectPhoto_three
import Image from "next/image";

const Projects = () => {
  return (
    <section className="w-full flex flex-col gap-9 items-center justify-center text-white">
      <div className="w-[80%] mt-32 ">
        <h1 className="text-[#ff8d23] text-2xl font-semibold">
          &quot;Young Engineers Mongolia Projects&quot;
        </h1>
        <h3 className="mt-8 text-sm text-slate-700 leading-4\5 ">
          &quot;Young Engineers Mongolia&quot; байгууллага нь 2024 онд
          байгуулагдсан, төрийн бус залуучуудын байгууллага юм. Манай
          байгууллагын гол тэмдэгт нь &quot;9E&quot; буюу 9 инженерчлэлийн
          салбарыг залуучуудад онцлон, мэдлэг олгох төрөл бүрийн сувгуудыг
          бүтээх төслүүд хэрэгжүүлдэг.
        </h3>
        <h3 className="mt-3 text-sm text-slate-700 leading-4\5">
          &quot;YEM&quot; байгууллагын алсын хараа нь ирээдүйн Монголын
          инженерчлэл, шинжлэх ухаан, технологийн ажлын хүчийг нэмэгдүүлэх
          юм. Энэхүү зорилгын хүрээнд бид үйл ажиллагаагаа залуучууд руу
          чиглүүлж, тэдэнд зориулсан 9 инженерчлэлийн төрлөөр өдөрлөг,
          сургалт, хөтөлбөр, блогуудыг бүтээдэг.
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
            &quot;Young Engineers Academy&quot; төслийн хүрээнд бид нийт 4
            хэлтэст 4 менежер болон 50 дадлагажигч шалгаруулан Цахим контент,
            Боловсролын сургалтууд, Блог буюу чанартай мэдээлэл бэлтгэх
            болон тэд нарыг нийтлэн, сурталчилах Вебсайт хийсэн. Энэхүү
            төслийн гол зорилго нь &quot;9E&quot; буюу 9 инженерчлэлийн
            салбарыг нийтэд таниулан сурталчилах зорилготой ба бид олон дэд
            төслүүдийг хэрэгжүүлсэн бөгөөд 1 том хэмжээний эвент, 2 workshop,
            81 блог, 51 цахим контент тус тус хийсэн билээ.
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
            &quot;9E for the Future&quot; өдөрлөг
          </header>
          <p className="w-full md:w-[90%]">
            &quot;Young Engineers Academy&quot; төслийн хүрээнд бид нийт 4
            хэлтэст 4 менежер болон 50 дадлагажигч шалгаруулан Цахим контент,
            Боловсролын сургалтууд, Блог буюу чанартай мэдээлэл бэлтгэх
            болон тэд нарыг нийтлэн, сурталчилах Вебсайт хийсэн. Энэхүү
            төслийн гол зорилго нь &quot;9E&quot; буюу 9 инженерчлэлийн
            салбарыг нийтэд таниулан сурталчилах зорилготой ба бид олон дэд
            төслүүдийг хэрэгжүүлсэн бөгөөд 1 том хэмжээний эвент, 2 workshop,
            81 блог, 51 цахим контент тус тус хийсэн билээ.
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
            байгууллагатай хамтран 2 удаагийн workshop-уудыг зохион
            байгуулсан. Workshop-ууд дээр “Инженерчлэл 101” буюу хэрхэн
            инженер болох, инженер болоход тохиромжтой хүний зан араншин гэх
            мэт ерөнхий ойлголтуудыг хүмүүст хүргэсэн ба дараагийн workshop
            дээр инженерчлэлийн хүрээнд их сургууль болон тэтгэлгийн цогц
            мэдээллүүдээр хангасан. Бид workshop хийхдээ дундуур нь
            оролцогчдын инженерчлэлийн сэтгэхүйг сорьсон хөгжөөнт тоглоомууд
            оролцуулсны нэг нь “Spaghetti tower” болон “Fun jeopardy” гэх
            тоглоомууд юм. Нийт 130 гаруй оролцогчидтойгоор амжилттай
            хэрэгжүүлсэн.
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
            сард дадлагажигч нар 9 мэргэжил бүрийн хүмүүстэй ярилцлага хийж
            тэд хэрхэн ажилладаг болон инженер болсон намтрыг нь хүмүүст
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
            Бид 3 сарын хугацаанд цахим хаягууд дээрээ нийт 51 контент
            оруулсан бөгөөд сар болгон 30’000 хүнд хүрч ажиллан одоогоор нийт
            2300 дагагчидтайгаар идэвхтэй контентуудаа оруулж байна. Цахим
            контентийн нэг чухал хэсэн нь блог потстер ба үүний хүрээнд бид
            судалгааны хэлтсийн бичсэн блогуудыг товчлон, загварчлан маш
            чанартай мэдээлэл оруулдаг.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Projects;
