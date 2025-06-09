import React from "react";
import { EventProps } from "react-big-calendar";

interface CustomEventForMonthProps {
  props: EventProps<{
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
  }>;
}

export const CustomEventForMonth = ({ props }: CustomEventForMonthProps) => {
  return (
    <div className="relative overflow-hidden h-full group">
      {/* Main event container */}
      <div className="rounded-xl transition-all duration-300 ease-out p-4 flex flex-col justify-between h-full hover:transform hover:scale-[1.02] hover:-translate-y-0.5">
        {/* Header section */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 leading-tight truncate mb-1 group-hover:text-blue-900 transition-colors duration-200">
              {props.event.title}
            </h3>
            {/* Subtle category indicator */}
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-200"></div>
          </div>

          {/* Status indicator */}
          <div className="relative ml-3 flex-shrink-0">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"></div>
            <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Time display section */}
        <div className="mt-auto">
          <div className="flex items-center text-xs font-semibold text-gray-700 group-hover:text-blue-800 transition-colors duration-200">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 mr-2 group-hover:bg-blue-100 transition-colors duration-200">
              <svg
                className="w-2.5 h-2.5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div className="flex items-center space-x-1">
              <span className="text-gray-800 font-bold">
                {props.event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="text-gray-400 font-light text-xs">→</span>
              <span className="text-gray-800 font-bold">
                {props.event.end.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          {/* Duration indicator */}
          <div className="mt-2 text-[10px] text-gray-500 font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-200">
            {Math.round(
              (props.event.end.getTime() - props.event.start.getTime()) /
                (1000 * 60)
            )}{" "}
            phút
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-200"></div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
