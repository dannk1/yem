import React from "react";
import Link from "next/link";
const blogs = [
  "Software Engineering",
  "Mechanical Engineering",
  "Nano Engineering",
  "Engineering",
  "Engineering",
  "Engineering",
  "Engineering",
  "Engineering",
  "Engineering",
];
const BlogsDropDownMenu = () => {
  return (  
    <div className="absolute left-0 bg-[#01093a] border border-[#FEA13E] mt-2 py-2 w-32 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <ul>
        {blogs.map((item, index) => (
          <li key={index}>
            <Link
              href={`/Blogs/${item.replace(" ", "_")}`}
              className="block px-4 py-2 text-white hover:bg-[#FEA13E] hover:text-[#01093a]"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsDropDownMenu;
