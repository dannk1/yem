'use client';
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter, usePathname } from "next/navigation";

// interface BlogCardProp {
//   title: string;
//   description: string;
//   contents: {
//     id: number;
//     imageSrc: string;
//     author: string;
//     title: string;
//     date: string;
//     description: string;
//   };
// }
interface BlogPreviewProp {
  id: number;
  imageSrc?: string;
  author: string;
  title: string;
  date: string;
  description: string;
}
// const formatDate = (dateString: string): string => {
//   if (!dateString) return "No date provided";

//   const parts = dateString.split(".");
//   if (parts.length !== 3) return dateString;

//   const [year, month, day] = parts.map(Number);
//   if (isNaN(year) || isNaN(month) || isNaN(day)) return dateString;

//   const date = new Date(year, month - 1, day);
//   return date.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// };

const BlogCard = ({
  id,
  imageSrc,
  author,
  title,
  date,
  description,
}: BlogPreviewProp) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <Card className="max-w-4xl mx-auto overflow-hidden mt-4 mb-8 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-5">
                {             
              imageSrc &&
              <Image
              src={imageSrc}
              width={300}
              height={200}
              alt={title}
              className="object-cover w-full h-full"
            />}
          </div>
          <div className="w-full md:w-2/3 p-6">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-2">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>{" "}
                | {author}
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground">{description}</p>
              <p className="text-sm text-primary mt-2 inline-block">
                Read more...
              </p>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
