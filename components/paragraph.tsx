import React from "react";

interface ParagraphProps {
  displayBtn: boolean;
  buttonURl?: string;
  number: string;
  head: string;
  para: string;
  imagesrc?: string;
}

const Paragraph = (props: ParagraphProps) => {
  const displayButton = props.displayBtn;
  function DisplayLink() {
    if (displayButton) {
      return (
        <a
          href={props.buttonURl}
          className="hover:scale-[1.05] duration-300 w-[160px] md:ml-4 h-auto px-4 py-2 text-base text-center bg-[#ff8d23] text-[#fff5ee] mt-4 rounded-md"
        >
          Илүү ихийг харах
        </a>
      );
    }
  }
  return (
    <article className="w-[80%] h-auto flex flex-col md:flex-row justify-center items-center gap-6 py-[16px] border-t-2 border-black">
      <section className="w-full h-auto flex flex-col">
        <div className="h-[140px] relative">
          <h1 className="w-[130px] text-[126px] opacity-35 align-text-top leading-[140px]">
            {props.number}
          </h1>
          <h3 className="w-auto h-auto text-[32px] bottom-4 absolute font-bold text-[#01093a]">
            {props.head}
          </h3>
        </div>
        <p className="md:ml-4">{props.para}</p>
        <DisplayLink />
      </section>
      <img
        className="w-full md:w-[40%]"
        src={props.imagesrc || `https://picsum.photos/200?random=${props.number}`}
        alt=""
      />
    </article>
  );
};

export default Paragraph;
