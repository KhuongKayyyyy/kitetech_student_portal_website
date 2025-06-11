"use client";
import React, { useState } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  EventProps,
  View,
  Views,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../time-table/Css/customCalendar.css";
import { vi } from "date-fns/locale";
import { format } from "date-fns/format";
import { getDay } from "date-fns/getDay";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { ToolBarCalendar } from "./ToolBarCalendar";
import { CustomEventForDay } from "./CustomEventForDay";
import { CustomEventForWeek } from "./CustomEventForWeek";
import { CustomEventForMonth } from "./CustomEventForMonth";
import { CalendarHeader } from "./CalendarHeader";

export const TimeTable = () => {
  const locales = {
    vi: vi,
    en: undefined,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const [currentView, setCurrentView] = useState<View>(Views.WEEK);

  const myEventsList = [
    {
      title: "Big Meeting",
      start: new Date(2025, 6, 2, 10, 0),
      end: new Date(2025, 6, 2, 12, 0),
      allDay: false,
    },
  ];

  const getSessionLabel = (date: Date): string => {
    const hour = date.getHours();
    if (hour === 6) return "🌤 Sáng";
    if (hour === 12) return "🌞 Trưa";
    if (hour === 14) return "🌇 Chiều";
    return "";
  };

  const getSlotStyle = (date: Date) => {
    const hour = date.getHours();
    if (hour >= 6 && hour < 12) return { backgroundColor: "#e0f2fe" }; // Sáng
    if (hour >= 12 && hour < 14) return { backgroundColor: "#fef9c3" }; // Trưa
    if (hour >= 14 && hour < 18) return { backgroundColor: "#fee2e2" }; // Chiều
    return { backgroundColor: "white" };
  };

  const renderEvent = (
    view: View,
    props: EventProps<{
      title: string;
      start: Date;
      end: Date;
      allDay: boolean;
    }>
  ) => {
    if (view === Views.WEEK) return <CustomEventForWeek props={props} />;
    if (view === Views.DAY) return <CustomEventForDay props={props} />;
    if (view === Views.MONTH) return <CustomEventForMonth props={props} />;
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold p-4">Weekly Time Table</h1>
      </div>
      <div>
        <Calendar
          localizer={localizer}
          culture="vi"
          events={myEventsList}
          defaultDate={new Date()}
          views={["week", "day", "month"]}
          view={currentView} // 👈 View được đồng bộ từ state
          onView={(view) => setCurrentView(view)} // 👈 Đồng bộ khi người dùng đổi view trong calendar
          step={60}
          timeslots={1}
          min={new Date(2025, 6, 2, 6, 0)}
          max={new Date(2025, 6, 2, 19, 0)}
          style={{ minHeight: "500px", marginBottom: "20px" }}
          components={{
            toolbar: (props) => (
              <ToolBarCalendar
                props={props}
                setCurentView={(view) => {
                  props.onView(view); // Gọi để Calendar cập nhật
                  setCurrentView(view); // Cập nhật local state
                }}
              />
            ),
            header: (props) => <CalendarHeader props={props} />,
            event: (props) => renderEvent(currentView, props),
          }}
          eventPropGetter={() => ({
            style: {
              background: "#b3ffb3",
              border: "none",
              borderLeft: "4px solid #00ff00",
              borderRadius: "12px",
              boxShadow:
                "0 2px 8px rgba(59, 130, 246, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)",
              padding: "12px",
              margin: "2px",
              width: "calc(100% - 4px)",
              height: "100%",
              color: "#1f2937",
              fontSize: "13px",
              fontWeight: "600",
              lineHeight: "1.4",
              transition: "all 0.2s ease-in-out",
              cursor: "pointer",
            },
            className: "hover: bg-none ",
          })}
          slotPropGetter={(date) => ({
            style: getSlotStyle(date),
          })}
          formats={{
            dayFormat: (date, culture, localizer) =>
              localizer!.format(date, "EEE dd/MM", culture),
            weekdayFormat: (date, culture, localizer) =>
              localizer!.format(date, "EEEE", culture),
            monthHeaderFormat: (date, culture, localizer) =>
              localizer!.format(date, "MMMM yyyy", culture),
            dayHeaderFormat: (date, culture, localizer) =>
              localizer!.format(date, "EEEE dd/MM", culture),
            dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
              `${localizer!.format(
                start,
                "dd/MM/yyyy",
                culture
              )} - ${localizer!.format(end, "dd/MM/yyyy", culture)}`,
            eventTimeRangeFormat: () => "",
            timeGutterFormat: (date) => getSessionLabel(date),
          }}
          onSelectEvent={(event) => {
            console.log("Event selected:", event);
          }}
        />
      </div>

      <style jsx global>{`
        .rbc-event-label {
          font-weight: 600 !important;
          color: #1f2937 !important;
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
        }

        .rbc-event-label + div {
          color: #6b7280 !important;
          font-size: 11px !important;
          margin-top: 2px !important;
        }

        .rbc-time-gutter .rbc-label {
          font-weight: 700;
          color: #374151;
          font-size: 14px;
          padding-left: 4px;
        }
      `}</style>
    </div>
  );
};
