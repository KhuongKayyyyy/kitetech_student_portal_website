import React from "react";
import { EventProps } from "react-big-calendar";

interface CustomEventForDayProps {
  props: EventProps<{
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
  }>;
}

export const CustomEventForDay = ({ props }: CustomEventForDayProps) => {
  return (
    <div className="relative overflow-hidden h-full group min-h-[150px]">
      {/* Main event container */}
      <div className="rounded-xl transition-all duration-300 ease-out p-3 flex flex-col justify-between h-full hover:transform hover:scale-[1.01] hover:-translate-y-0.5">
        {/* Header section with title and status */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1.5 group-hover:text-blue-900 transition-colors duration-200 line-clamp-2">
              {props.event.title}
            </h3>
            <div className="flex items-center space-x-1.5 font-semibold text-gray-800 group-hover:text-blue-800 transition-colors duration-200">
              <span>
                {props.event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span className="text-gray-400 font-light">→</span>
              <span>
                {props.event.end.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          {/* Priority indicator */}
          <div className="relative ml-2 flex-shrink-0">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200"></div>
            <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* Time section - only show if not all day */}
        {!props.event.allDay && (
          <div className="mt-auto">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
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
              </div>

              {/* Duration display */}
              <div className="text-xs text-gray-500 font-medium bg-gray-100 px-1.5 py-0.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-200">
                {Math.round(
                  (props.event.end.getTime() - props.event.start.getTime()) /
                    (1000 * 60)
                )}
                p
              </div>
            </div>
          </div>
        )}

        {/* All day event footer */}
        {props.event.allDay && (
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-xs text-gray-600">
              <svg
                className="w-3.5 h-3.5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">Sự kiện cả ngày</span>
            </div>

            <div className="w-6 h-0.5 bg-gradient-to-r from-green-400 to-green-300 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-200"></div>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-2 right-2 w-0.5 h-6 bg-gradient-to-b from-blue-400 via-blue-300 to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-200"></div>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};
