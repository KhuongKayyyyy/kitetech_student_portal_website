"use client";
import React from "react";
import { ToolbarProps, View } from "react-big-calendar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  props: ToolbarProps<
    {
      title: string;
      start: Date;
      end: Date;
      allDay: boolean;
    },
    object
  >;
  setCurentView: (view: View) => void;
}

export const ToolBarCalendar = ({ props, setCurentView }: Props) => {
  const handleNavigate = (action: "PREV" | "NEXT" | "TODAY") => {
    props.onNavigate(action);
  };

  return (
    <div className="flex items-center justify-between px-4 py-2  rounded-md">
      {/* Trái: Nút điều hướng */}
      <div></div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center gap-4 ">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("PREV")}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            className="w-fit p-4"
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("TODAY")}
          >
            Hôm nay
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigate("NEXT")}
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        <Select
          value={props.view as View}
          onValueChange={(value) => {
            props.onView(value as View); // Cập nhật cho Calendar
            setCurentView(value as View); // Đồng bộ với state cha (TimeTable)
          }}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Chọn lịch" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="day">Ngày</SelectItem>
            <SelectItem value="week">Tuần</SelectItem>
            <SelectItem value="month">Tháng</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
