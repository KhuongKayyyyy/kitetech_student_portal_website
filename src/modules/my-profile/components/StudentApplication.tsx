import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import React from "react";

export const StudentApplication = () => {
  return (
    <AccordionItem
      value="item-5"
      className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
    >
      <AccordionTrigger className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-slate-50 border-0">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
          Hồ sơ tuyển sinh
        </h3>
      </AccordionTrigger>

      <AccordionContent className="p-6 bg-white">
        <div className="flex flex-col gap-6">
          {/* Thông tin bằng cấp */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-slate-700">
            <span className="text-red-500 font-semibold">
              Thông tin văn bằng đầu vào
            </span>{" "}
            (Nếu tốt nghiệp năm hiện tại → bỏ qua các mục Số hiệu văn bằng, Số
            vào sổ văn bằng, Nơi cấp văn bằng)
          </div>

          {/* Bằng cấp */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm">Loại văn bằng</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="Giáo dục chính quy"
              />
            </div>

            <div>
              <label className="text-sm">Số báo danh thi</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="55001010"
              />
            </div>

            <div>
              <label className="text-sm">Ngày tốt nghiệp THPT</label>
              <Input
                disabled
                type="date"
                className="w-full rounded-md border px-3 py-2"
                defaultValue="2021-06-07"
              />
            </div>

            <div>
              <label className="text-sm">Hội đồng thi</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="Sở GDĐT TP. Cần Thơ"
              />
            </div>

            <div>
              <label className="text-sm">Số hiệu văn bằng</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="không"
              />
            </div>

            <div>
              <label className="text-sm">Số vào sổ văn bằng</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="không"
              />
            </div>

            <div>
              <label className="text-sm">Nơi cấp văn bằng</label>
              <Input
                disabled
                className="w-full rounded-md border px-3 py-2"
                placeholder="Sở An Giang"
              />
            </div>
          </div>

          {/* Thông tin học bạ */}
          {["Lớp 10", "Lớp 11", "Lớp 12"].map((grade) => (
            <div key={grade}>
              <div className="font-semibold text-blue-600 mb-2">{grade}</div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm">Tỉnh/Thành phố</label>
                  <Input
                    disabled
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="TP. Cần Thơ"
                  />
                </div>
                <div>
                  <label className="text-sm">Trường</label>
                  <Input
                    disabled
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="THPT Thốt Nốt"
                  />
                </div>
                <div>
                  <label className="text-sm">ĐTB cả năm</label>
                  <Input
                    disabled
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="08.90"
                  />
                </div>
                <div>
                  <label className="text-sm">Xếp loại học lực</label>
                  <Input
                    disabled
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Giỏi"
                  />
                </div>
                <div>
                  <label className="text-sm">Xếp loại hạnh kiểm</label>
                  <Input
                    disabled
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Tốt"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Thông tin thẩm tra */}
          <div>
            <label className="text-sm font-semibold text-green-600">
              Thông tin thẩm tra văn bằng
            </label>
            <Input
              disabled
              className="w-full rounded-md border px-3 py-2"
              placeholder="Hợp pháp"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
