import React from "react";

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col gap-12 items-center">
      <strong className="text-6xl">Professional Experience</strong>
      {children}
    </div>
  );
}
