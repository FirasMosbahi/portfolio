"use client";

import React from "react";
import useCustomNavigation from "@portfolio/hooks/use-custom-navigation";
import { RightArrow } from "@portfolio/components/icons";
import { PROFESSIONAL_EXPERIENCE_INTRO } from "@portfolio/content/professional-experience";

export default function Page(): React.ReactElement {
  useCustomNavigation();
  const content = PROFESSIONAL_EXPERIENCE_INTRO;
  return (
    <main className="flex flex-col text-center w-[70%] gap-12">
      <p className="text-2xl">{content}</p>
      <button className="text-[#5c1e68] flex flex-row justify-center items-center text-xl">
        <p>See details</p> <RightArrow fill={"#5c1e68"} />
      </button>
    </main>
  );
}
