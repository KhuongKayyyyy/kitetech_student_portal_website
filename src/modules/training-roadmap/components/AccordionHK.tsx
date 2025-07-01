import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { roadMapData } from "../data/roadMapData";

interface AccordionHKProps {
  hocky: number;
}

export const AccordionHK = ({ hocky }: AccordionHKProps) => {
  return (
    <Accordion
      defaultValue={`hocKy-${hocky}`}
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem
        value={`hocKy-${hocky}`}
        className="border-0 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <AccordionTrigger className="px-6 py-5 hover:no-underline border-0 bg-gradient-to-r from-slate-50 to-gray-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="text-lg font-bold text-gray-700">{hocky}</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Học kỳ {hocky}
            </h2>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-6 py-6 bg-white">
          <div className="space-y-3">
            {roadMapData.ctdt
              .filter((item) => item.HocKy === hocky)
              .map((item, idx) => (
                <div
                  key={idx}
                  className="group p-4 rounded-xl bg-gray-50/70 hover:bg-blue-50/80 border border-transparent hover:border-blue-100 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-900 transition-colors">
                        {item.TenMonHoc}
                      </h3>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-white text-gray-600 rounded-lg border border-gray-200 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200 transition-all">
                          {item.TinChiTichLuy || 3} tín chỉ
                        </span>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {roadMapData.ctdt.filter((item) => item.HocKy === hocky).length ===
            0 && (
            <div className="text-center py-12">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Chưa có môn học nào</p>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
