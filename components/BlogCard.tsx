import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface BlogCardProp {
  imageSrc: string;
  topic: string;
  title: string;
  date: string;
  description: string;
}

const formatDate = (dateString: string): string => {
  if (!dateString) return "No date provided";

  const parts = dateString.split(".");
  if (parts.length !== 3) return dateString;

  const [year, month, day] = parts.map(Number);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return dateString;

  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogCard = ({
  imageSrc,
  topic,
  title,
  date,
  description,
}: BlogCardProp) => {
  return (
    <div>
      <Card className="max-w-4xl mx-auto overflow-hidden mt-4 mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-5">
            <Image
              src={imageSrc}
              width={300}
              height={200}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-2/3 p-6">
            <CardHeader className="p-0">
              <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-2">
                {formatDate(date)} | {topic}
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground">{description}</p>
              <Link
                href="#"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                Read more...
              </Link>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
