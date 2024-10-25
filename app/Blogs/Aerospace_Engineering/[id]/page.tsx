import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CalendarIcon, TagIcon } from "lucide-react";
import blogData from "@/BlogContents/Aerospace.json";

type BlogPost = {
  id: number;
  imageSrc?: string;
  author?: string;
  title: string;
  date: string;
  description: string;
  blog: string;
};

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogData.contents.find(
    (post) => post.id === parseInt(params.id)
  );
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: Props) {
  const post = blogData.contents.find(
    (post) => post.id === parseInt(params.id)
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <nav className="bg-navy-600 text-saaral p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl text-[#ff8d23] font-bold">
            Aerospace Engineering
          </h1>
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-saaral font-bold py-2 px-4 rounded transition duration-300">
            Subscribe
          </button> */}
        </div>
      </nav>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl text-saaral md:text-5xl font-bold mb-9">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="mx-2">•</span>
            <TagIcon className="w-5 h-5 mr-2" />

          </div>
          <div className="relative w-full h-96 mb-8">
          {   
              post.imageSrc &&
              <Image
              src={post.imageSrc}
              alt={`Cover image for ${post.title}`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />}
          </div>
          {/* <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            {post.description}
          </p> */}
        </header>
        <div
          className="text-saaral tprose max-w-none prose-lg prose-headings:text-saaral prose-a:text-orange-600 hover:prose-a:text-orange-500"
          dangerouslySetInnerHTML={{ __html: post.blog }}
        />
        <footer className="mt-12 text-saaral pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            { post.author &&
              <p className="text-saaral flex items-center">
              <TagIcon className="w-5 h-5 mr-2 text-orange-500" />
              Author: {post.author}
            </p>}
            <div className="flex space-x-4">
              <button className="text-navy-600 hover:text-navy-800 transition duration-300">
                Share
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogData.contents.map((post) => ({
    id: post.id.toString(),
  }));
}
