// import { StudentImage } from "@/modules/my-profile/components/StudentImage";
import { StudentInfo } from "@/modules/my-profile/components/StudentInfo";
import React from "react";

function MyProfilePage() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold pl-[50px]  my-4">My Profile</h1>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <StudentInfo />
        {/* <StudentImage /> */}
      </div>
    </div>
  );
}
export default MyProfilePage;
