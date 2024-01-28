"use client";
import React from "react";
import { RightArrow } from "@portfolio/components/icons";
import useCustomNavigation from "@portfolio/hooks/use-custom-navigation";
import { INTRO_EDUCATION } from "@portfolio/content/education";

export default function EducationIndex(): React.ReactNode {
  useCustomNavigation();
  const content = INTRO_EDUCATION;
  return (
    <main className="flex flex-col text-center w-[70%] gap-12">
      <p className="text-2xl">
        {content[0]}
        <br /> {content[1]}
      </p>
      <button className="text-[#5c1e68] flex flex-row justify-center items-center text-xl">
        <p>See details</p> <RightArrow fill={"#5c1e68"} />
      </button>
    </main>
  );
}
