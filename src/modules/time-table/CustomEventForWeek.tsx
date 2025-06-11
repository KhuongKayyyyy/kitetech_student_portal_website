import { Clock } from "lucide-react";
import React from "react";
import { EventProps } from "react-big-calendar";

interface CustomEventForWeekProps {
  props: EventProps<{
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
  }>;
}

export const CustomEventForWeek = ({ props }: CustomEventForWeekProps) => {
  return (
    <div className="relative overflow-hidden h-[150px] group min-h-[150px]">
      <div className="rounded-xl transition-all duration-300 ease-out p-2 flex flex-col justify-between h-full hover:transform hover:scale-[1.02] hover:-translate-y-0.5">
        <div className="flex items-start flex-col gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-bold text-gray-900 leading-tight truncate mb-1 group-hover:text-blue-900 transition-colors duration-200">
              {props.event.title}
            </h3>
            <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <Clock width={12} className="text-blue-500" />
            </div>
            <div className="text-[12px]">
              {props.event.start.toString().slice(16, 21)} -{" "}
              {props.event.end.toString().slice(16, 21)}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 w-0.5 h-5 bg-gradient-to-b from-blue-400 to-transparent rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-200"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
