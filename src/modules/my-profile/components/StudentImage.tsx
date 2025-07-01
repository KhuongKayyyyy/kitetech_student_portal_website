import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import avatar from "../../../assets/img/avatar1.png";

export const StudentImage = () => {
  return (
    <div>
      <AccordionItem
        value="item-2"
        className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
      >
        <AccordionTrigger className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-slate-50  border-0">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
            Hình ảnh cá nhân
          </h3>
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-8 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center gap-6">
            {/* Additional personal information can be added here */}
            <div className=" relative group">
              {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> */}
              <Image
                src={avatar}
                width={200}
                height={100}
                alt="Sign In Image"
                className="w-full object-cover rounded-2xl shadow-md  border border-gray-100"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};
