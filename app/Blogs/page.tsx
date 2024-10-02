import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-black">PlaceHolder😊</h1>
      <div className="grid grid-cols-3 gap-3">
        <Link
          href="/Blogs/Blog1"
          className={buttonVariants({ variant: "secondary", className: "lg"})}
        >
          Blog1
        </Link>
        <Link
          href="/Blogs/Blog2"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog2
        </Link>
        <Link
          href="/Blogs/Blog3"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog3
        </Link>
        <Link
          href="/Blogs/Blog4"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog4
        </Link>
        <Link
          href="/Blogs/Blog5"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog5
        </Link>
        <Link
          href="/Blogs/Blog1"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog6
        </Link>

        <Link
          href="/Blogs/Blog7"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog7
        </Link>
        <Link
          href="/Blogs/Blog8"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog8
        </Link>
        <Link
          href="/Blogs/Blog9"
          className={buttonVariants({ variant: "secondary" })}
        >
          Blog9
        </Link>
      </div>
    </div>
  );
};

export default page;
