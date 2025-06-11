"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useRouter } from "next/navigation";
import { Calendar, Home, Search, Settings } from "lucide-react";
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },

  {
    title: "Calendar",
    url: "/time-table",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useRouter();
  const handleClick = (itemTitle: string, itemUrl: string) => {
    console.log("clicked", itemTitle, itemUrl);
    setActiveItem(itemTitle);
    navigate.push(itemUrl);
  };
  return (
    <Sidebar className="w-64 bg-white border-r border-gray-200 shadow-lg">
      <SidebarContent className="pt-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold text-gray-800 mb-16 flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm"></div>
            </div>
            <span>CTTSV</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className="w-full">
            <SidebarMenu className="space-y-6 w-full">
              {items.map((item) => {
                const isActive = activeItem === item.title;
                return (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton asChild className="w-full p-0 h-16">
                      <div
                        onClick={() => handleClick(item.title, item.url)}
                        className={`p-5 cursor-pointer ${
                          isActive
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 shadow-md scale-105"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md transition-all duration-300 ease-in-out transform"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg shadow-sm transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-blue-500 to-purple-600"
                              : "bg-gradien-to-r  hover:from-blue-500 hover:to-purple-600"
                          }`}
                        >
                          <item.icon
                            className={`w-6 h-6 transition-colors duration-300 ${
                              isActive ? "text-white" : "text-gray-600"
                            }`}
                          />
                        </div>
                        <div>
                          <span
                            className={`ml-3 text-lg font-medium transition-transform duration-300 ${
                              isActive ? "text-gray-900 " : "text-gray-600"
                            }`}
                          >
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
