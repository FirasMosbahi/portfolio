"use client";

import React from "react";
import useCustomNavigation from "@portfolio/hooks/use-custom-navigation";
import { PROFESSIONAL_EXPERIENCES } from "@portfolio/content/professional-experience";
import ExperienceDetailsElement from "@portfolio/app/experience/details/ExperienceDetailsElement";

export default function Page(): React.ReactElement {
  useCustomNavigation();
  const content = PROFESSIONAL_EXPERIENCES;
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
      {content.map((e, index) => (
        <ExperienceDetailsElement {...e} key={index} />
      ))}
    </div>
  );
}
