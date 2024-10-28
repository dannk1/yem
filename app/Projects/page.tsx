"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectData = [
  {
    id: "young-engineers-academy",
    title: "Young Engineers Academy",
    image: "/assets/IMG_711v.jpg",
    description:
      "Young Engineers Academy төслийн хүрээнд бид нийт 4 хэлтэст 4 менежер болон 50 дадлагажигч шалгаруулан Цахим контент, Боловсролын сургалтууд, Блог буюу чанартай мэдээлэл бэлтгэх болон тэд нарыг нийтлэн, сурталчилах Вебсайт хийсэн. Энэхүү төслийн гол зорилго нь 9E буюу 9 инженерчлэлийн салбарыг нийтэд таниулан сурталчилах зорилготой ба бид олон дэд төслүүдийг хэрэгжүүлсэн бөгөөд 1 том хэмжээний эвент, 2 workshop, 81 блог, 51 цахим контент тус тус хийсэн билээ.",
  },
  {
    id: "9e-for-the-future",
    title: "9E for the Future өдөрлөг",
    image: "/assets/nineE.jpg",
    description:
      "Young Engineers Mongolia байгууллагын МУИС-ийн Шинжлэх Ухаан Технологийн Парк-тай хамтран зохион байгуулсан инженерчлэлийн 9 чиглэлийг сурагчдад суртачлах зорилготой өдөрлөг 10-р сарын 12-ны өдөр амжилттай зохион байгуулагдаж, нийт 9 илтгэгч болон 60+ үзэгчидтэй болж өнгөрсөн билээ. Өдөрлөгийн хүрээнд нийт 9 инженерчлэлийн салбарын 9 зочин илтгэгч нар өөрсдийн салбараа танилцуулснаас гадна боловсролын байгууллагуудын үзэсгэлэн болон хөгжөөн танилцах тоглоомнууд зохион байгуулагдсан.",
  },
  {
    id: "workshop",
    title: "Workshop",
    image: "/assets/workshop.jpg",
    description:
      'Бид төслийн хүрээнд American Corner Ulaanbaatar боловсролын байгууллагатай хамтран 2 удаагийн workshop-уудыг зохион байгуулсан. Workshop-ууд дээр Инженерчлэл 101 буюу хэрхэн инженер болох, инженер болоход тохиромжтой хүний зан араншин гэх мэт ерөнхий ойлголтуудыг хүмүүст хүргэсэн ба дараагийн workshop дээр инженерчлэлийн хүрээнд их сургууль болон тэтгэлгийн цогц мэдээллүүдээр хангасан. Бид workshop хийхдээ дундуур нь оролцогчдын инженерчлэлийн сэтгэхүйг сорьсон хөгжөөнт тоглоомууд оролцуулсны нэг нь Spaghetti tower болон Fun jeopardy гэх тоглоомууд юм. Нийт 130 гаруй оролцогчидтойгоор амжилттай хэрэгжүүлсэн.',
  },
  {
    id: "blog",
    title: "Блог",
    image: "/assets/mainPage/Blog.png",
    description:
      "Судалгааны хэлтэс нь 9E-ээр 9 сэдвүүдийн дор нийт 81 блог бичсэн бөгөөд цахим хуудсанд эдгээр блогуудын мэдээллийг товчилсон ба хүмүүсийн нүдэнд туссан байдлаар блог постер болгон оруулсан. 10 сард дадлагажигч нар 9 мэргэжил бүрийн хүмүүстэй ярилцлага хийж тэд хэрхэн ажилладаг болон инженер болсон намтрыг нь хүмүүст сонирхуулсан блогуудыг бичсэн.",
  },
  {
    id: "digital-content",
    title: "Цахим контент",
    image: "/assets/tsahimContent.png",
    description:
      "Бид 3 сарын хугацаанд цахим хаягууд дээрээ нийт 51 контент оруулсан бөгөөд сар болгон 30'000 хүнд хүрч ажиллан одоогоор нийт 2300 дагагчидтайгаар идэвхтэй контентуудаа оруулж байна. Цахим контентийн нэг чухал хэсэг нь блог потстер ба үүний хүрээнд бид судалгааны хэлтсийн бичсэн блогуудыг товчлон, загварчлан маш чанартай мэдээлэл оруулдаг.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("young-engineers-academy");

  return (
    <section className="w-full min-h-screen text-slate-800 py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#ff8d23]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Young Engineers Mongolia Projects
        </motion.h1>
        <motion.div
          className="max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-saaral mb-4">
            &quot;Young Engineers Mongolia&quot; байгууллага нь 2024 онд
            байгуулагдсан, төрийн бус залуучуудын байгууллага юм. Манай
            байгууллагын гол тэмдэгт нь &quot;9E&quot; буюу 9 инженерчлэлийн
            салбарыг залуучуудад онцлон, мэдлэг олгох төрөл бүрийн сувгуудыг
            бүтээх төслүүд хэрэгжүүлдэг.
          </p>
          <p className="text-lg text-saaral">
            &quot;YEM&quot; байгууллагын алсын хараа нь ирээдүйн Монголын
            инженерчлэл, шинжлэх ухаан, технологийн ажлын хүчийг нэмэгдүүлэх
            юм. Энэхүү зорилгын хүрээнд бид үйл ажиллагаагаа залуучууд руу
            чиглүүлж, тэдэнд зориулсан 9 инженерчлэлийн төрлөөр өдөрлөг,
            сургалт, хөтөлбөр, блогуудыг бүтээдэг.
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2">
            {projectData.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="px-4 py-2"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectData.map((project) => (
            <TabsContent key={project.id} value={project.id}>
              <Card className="bg-[#EDE8D0] border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#ff8d23]">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  <div className="relative w-full h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-saaral">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
