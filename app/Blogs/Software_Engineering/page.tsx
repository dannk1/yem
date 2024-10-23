import React from "react";
import BlogCard from "@/components/BlogCard";
import { Card } from "@/components/ui/card";
import Aerospace from "@/BlogContents/Software.json"
const Page = () => {
  return (
    <div className="mt-20 mx-auto max-w-4xl font-roboto">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[#585858] text-3xl font-semibold mb-4">
          {Aerospace.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {Aerospace.description}
        </p>
      </div>
      <Card className="p-6 bg-gray-200">
        <div>
          {Aerospace.contents.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Page;
