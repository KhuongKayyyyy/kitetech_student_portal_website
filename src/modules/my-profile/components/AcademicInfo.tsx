import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import React from "react";

export const AcademicInfo = () => {
  return (
    <AccordionItem
      value="item-1"
      className="border border-slate-200 rounded-xl shadow-sm overflow-hidden"
    >
      <AccordionTrigger className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-slate-50  border-0">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
          Thông tin nhập học
        </h3>
      </AccordionTrigger>
      <AccordionContent>
        <div className="p-6 bg-white grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">MSSV</p>
                <Input
                  disabled
                  defaultValue={"090922"}
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Giới Tính</p>
                <Input
                  defaultValue={"Nam"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Lớp</p>
                <Input
                  defaultValue={"088855"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">
                  Năm vào trường
                </p>
                <Input
                  defaultValue={"2021"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Họ Lót</p>
                <Input
                  disabled
                  defaultValue={"Nguyễn Đạt"}
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Đối tượng</p>
                <Input
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Khoa</p>
                <Input
                  defaultValue={"Công nghệ thông tin"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Hệ đào tạo</p>
                <Input
                  defaultValue={"Đại học chính quy"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Tên</p>
                <Input
                  defaultValue={"Khuong"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Khu vực</p>
                <Input
                  defaultValue={"Miền Bắc"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">
                  Chuyên ngành
                </p>
                <Input
                  defaultValue={"Khoa học máy tính"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <div className="flex flex-col gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm font-medium text-slate-700">Ngày sinh</p>
                <Input
                  defaultValue={"08/03/2003"}
                  disabled
                  className="bg-slate-50 border-slate-200 text-slate-800 font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
