import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
// import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

export const StudentProInfo = () => {
  return (
    <AccordionItem
      value="item-3"
      className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
    >
      <AccordionTrigger className="w-full flex justify-between items-center p-6 bg-gradient-to-r from-blue-50 to-slate-50 border-0">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-800">
          Thông tin sinh viên
        </h3>
      </AccordionTrigger>

      <AccordionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/** Hàng 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nơi sinh
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="An Giang"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quốc tịch
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Việt Nam"
            />
          </div>

          {/** Hàng 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dân tộc
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Kinh"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tôn giáo
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder=""
            />
          </div>

          {/** Hàng 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số CCCD
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="092203006615"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Ngày cấp
            </label>
            <Input
              disabled
              type="date"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/** Hàng 4 */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại sinh viên
            </label>
            <Input
              disabled
              type="tel"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="0907827157"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Số điện thoại gia đình
            </label>
            <Input
              disabled
              type="tel"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="0909092268"
            />
          </div>

          {/** Hàng 5 - Địa chỉ hiện nay */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Địa chỉ hiện nay
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="226, Tạ Quang Bửu, Phường 04, Quận 8, TP. Hồ Chí Minh"
            />
          </div>

          {/** Hàng 6 - Địa chỉ thường trú */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Địa chỉ thường trú
            </label>
            <Input
              disabled
              type="text"
              className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="1482, khu vực Thới Thạnh 1, Phường Thới Thuận, Quận Thốt Nốt, TP. Cần Thơ"
            />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
