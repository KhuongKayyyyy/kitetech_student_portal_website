"use client";
import { Accordion } from "@/components/ui/accordion";

import React from "react";
import { StudentImage } from "./StudentImage";
import { StudentProInfo } from "./StudentProInfo";
import { AcademicInfo } from "./AcademicInfo";
import { FamilyRelationShip } from "./FamilyRelationShip";
import { StudentApplication } from "./StudentApplication";
export const StudentInfo = () => {
  return (
    <div className="w-full mx-auto p-4">
      <Accordion
        defaultChecked
        className="w-full flex flex-col gap-7 p-7"
        type="multiple"
        defaultValue={["item-1", "item-2", "item-3", "item-4", "item-5"]} // Default open items
      >
        <AcademicInfo />
        <StudentImage />
        <StudentProInfo />
        <FamilyRelationShip />
        <StudentApplication />
      </Accordion>
    </div>
  );
};
