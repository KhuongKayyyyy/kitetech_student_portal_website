import React from "react";
import { SidebarTrigger } from "./sidebar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./menubar";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div>
        <div className="p-1 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
          <SidebarTrigger />
        </div>
      </div>

      <div>
        <Menubar className="border-none bg-transparent shadow-none">
          <MenubarMenu>
            <MenubarTrigger className="p-0 border-none bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
              <div className="relative group">
                <Avatar className="w-10 h-10 object-cover transition-all duration-200 group-hover:ring-2 group-hover:ring-gray-300 dark:group-hover:ring-gray-600">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User Avatar"
                  />
                  <AvatarFallback className="bg-gray-500 text-white">
                    U
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
              </div>
            </MenubarTrigger>

            <MenubarContent className="w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg">
              <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  john@example.com
                </p>
              </div>

              <MenubarItem className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                New Tab
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>

              <MenubarItem className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                New Window
              </MenubarItem>

              <MenubarSeparator />

              <MenubarItem className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                Share
              </MenubarItem>

              <MenubarSeparator />

              <MenubarItem className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                Print
              </MenubarItem>

              <MenubarSeparator />

              <MenubarItem className="hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-150 text-red-600 dark:text-red-400">
                Sign Out
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};
