import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { ToolbarProps, View } from "react-big-calendar";
interface ToolBarCalendarProps {
  // Define any props if needed
  props: ToolbarProps<
    {
      title: string;
      start: Date;
      end: Date;
      allDay: boolean;
    },
    object
  >;
  setCurentView: React.Dispatch<React.SetStateAction<View>>;
}

export const ToolBarCalendar = ({
  setCurentView,
  props,
}: ToolBarCalendarProps) => {
  const handleViewChange = (view: View) => {
    props.onView(view);
    setCurentView(view);
  };
  const handleNext = () => {
    props.onNavigate("NEXT");
  };
  const handleToday = () => {
    props.onNavigate("TODAY");
  };
  const handlePrevious = () => {
    props.onNavigate("PREV");
  };

  return (
    <div className="flex items-center justify-between p-4  shadow-md">
      <div></div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center justify-center gap-1">
          <Button onClick={handleNext}>
            {" "}
            <ChevronLeft className="text-black dark:text-white" />
          </Button>
          <Button onClick={handleToday}>Today</Button>
          <Button onClick={handlePrevious}>
            {" "}
            <ChevronRight className="text-black dark:text-white" />
          </Button>
        </div>
        <div>
          <Select
            value={props.view}
            onValueChange={(value) => handleViewChange(value as View)}
          >
            <SelectTrigger className="w-[220px] h-[40px] text-[20px">
              <SelectValue
                className="text-[20px]"
                placeholder="Chọn chế độ xem"
              />
            </SelectTrigger>
            <SelectContent className="text-[20px] ">
              <SelectGroup>
                <SelectLabel className="text-[20px]">Chế độ xem</SelectLabel>
                <SelectItem className="text-[20px]" value="week">
                  Week
                </SelectItem>
                <SelectItem className="text-[20px]" value="day">
                  Day
                </SelectItem>
                <SelectItem className="text-[20px]" value="month">
                  Month
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
