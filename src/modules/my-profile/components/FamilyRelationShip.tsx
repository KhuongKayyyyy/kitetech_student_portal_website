"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Trash } from "lucide-react";

export const FamilyRelationShip = () => {
  const familyMembers = [
    {
      relation: "Cha",
      name: "Nguyễn Thành Nam",
      birthYear: "1978",
      ethnicity: "Kinh",
      nationality: "Việt Nam",
      job: "Kinh doanh",
      phone: "0909092268",
      address: "P. Tân Lộc, Q. Thốt Nốt, TP. Cần Thơ",
      workplace: "Trại Giống Nông Nghiệp Thốt Nốt",
    },
    {
      relation: "Mẹ",
      name: "Nguyễn Thị Thùy Linh",
      birthYear: "1980",
      ethnicity: "Kinh",
      nationality: "Việt Nam",
      job: "Kinh doanh",
      phone: "0939342723",
      address: "P. Tân Lộc, Q. Thốt Nốt, TP. Cần Thơ",
      workplace: "Trại Giống Nông Nghiệp Thốt Nốt",
    },
    {
      relation: "Em ruột",
      name: "Nguyễn Ngọc Thúy Vy",
      birthYear: "2004",
      ethnicity: "Kinh",
      nationality: "Việt Nam",
      job: "Học sinh",
      phone: "0937004415",
      address: "P. Tân Lộc, Q. Thốt Nốt, TP. Cần Thơ",
      workplace: "Trường THPT Thốt Nốt",
    },
  ];

  return (
    <AccordionItem
      value="item-4"
      className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
    >
      <AccordionTrigger className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-slate-50 border-0">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
          Quan hệ gia đình
        </h3>
      </AccordionTrigger>

      <AccordionContent>
        <div className="p-6 flex flex-col gap-6">
          {/* Table Family */}
          <div className="overflow-auto rounded-xl border">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-blue-100">
                <tr>
                  {[
                    "Quan hệ",
                    "Họ và tên",
                    "Năm sinh",
                    "Dân tộc",
                    "Quốc tịch",
                    "Nghề nghiệp",
                    "Số điện thoại",
                    "Nơi ở",
                    "Nơi công tác",
                    "",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 border text-left text-sm font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {familyMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="border px-4 py-2">{member.relation}</td>
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.birthYear}</td>
                    <td className="border px-4 py-2">{member.ethnicity}</td>
                    <td className="border px-4 py-2">{member.nationality}</td>
                    <td className="border px-4 py-2">{member.job}</td>
                    <td className="border px-4 py-2">{member.phone}</td>
                    <td className="border px-4 py-2">{member.address}</td>
                    <td className="border px-4 py-2">{member.workplace}</td>
                    <td className="border px-4 py-2 text-center">
                      <button className="text-red-500 hover:text-red-700">
                        <Trash className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-4">
            <label className="block text-sm font-medium text-gray-700">
              Tóm tắt hoàn cảnh gia đình
            </label>
            <textarea
              disabled
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder=""
            ></textarea>

            <div className="flex items-center gap-2">
              <Input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">
                Người đầu tiên trong gia đình học đại học
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Là con thứ</span>
                <Input
                  disabled
                  type="number"
                  className="w-20 rounded-md border px-2 py-1"
                  defaultValue={0}
                />
                <span className="text-sm">trong gia đình</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm">Là người thứ</span>
                <Input
                  disabled
                  type="number"
                  className="w-20 rounded-md border px-2 py-1"
                  defaultValue={0}
                />
                <span className="text-sm">
                  trong gia đình học đại học (bao gồm cha mẹ, anh/chị/em ruột)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">
                Có Anh/Chị/Em ruột đang học tại Trường Đại học Tôn Đức Thắng:
              </span>
            </div>

            {/* Table Anh/Chi/Em ruột học cùng trường */}
            <div className="overflow-auto rounded-xl border">
              <table className="w-full table-auto border-collapse">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-2 border">Họ và tên</th>
                    <th className="px-4 py-2 border">MSSV</th>
                    <th className="px-4 py-2 border"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center" colSpan={3}>
                      Không có dữ liệu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
