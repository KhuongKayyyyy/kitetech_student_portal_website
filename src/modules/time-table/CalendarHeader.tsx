import React from "react";
import { HeaderProps } from "react-big-calendar";
interface CalendarHeaderProps {
  props: HeaderProps;
  // Define any props if needed
}

export const CalendarHeader = ({ props }: CalendarHeaderProps) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 ">
        <h2 className="text-lg font-semibold text-gray-800">{props.label}</h2>
      </div>
    </div>
  );
};
