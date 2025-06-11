"use client";
import { Navbar } from "@/components/ui/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/WebSidebar";
import React from "react";
import { usePathname } from "next/navigation"; // 👈 Thêm dòng này

interface Props {
  children: React.ReactNode;
}

export const Root = ({ children }: Props) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/sign-in";
  return (
    <div>
      <SidebarProvider>
        {/* Chỉ hiện sidebar nếu không phải trang login */}
        {!isAuthPage && <AppSidebar />}
        <div className="flex flex-col h-screen w-full overflow-auto">
          {/* Chỉ hiện navbar nếu không phải trang login */}
          {!isAuthPage && (
            <div>
              <Navbar />
            </div>
          )}
          <div className="w-full">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
};
