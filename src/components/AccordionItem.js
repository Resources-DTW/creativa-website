import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AccordionItem = ({ open, toggle, title, desc, no }) => {
  return (
    <div className="pt-[15px] rounded-lg">
      <div
        className="bg-[#191919] py-[20px] max-sm:px-[16px] px-[50px] flex justify-between cursor-pointer rounded-md"
        onClick={toggle}
      >
        <div className="flex gap-10 items-center">
          <p
            className="text-[18px] text-white font-normal max-md:text-[16px] max-sm:text-[14px] max-md:items-center max-md:justify-center max-md:flex"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {no}
          </p>
          <p
            className="text-[22px] text-white text-left font-normal max-md:text-[16px] max-sm:text-[14px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {title}
          </p>
        </div>
        <div className="text-[30px] text-[#CEE531] max-md:ml-2 max-md:flex max-md:items-center max-md:text-[24px] max-sm:text-[14px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div
          className="pt-[10px] px-[50px] pb-[20px] bg-[#191919] text-white max-md:text-[14px]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
