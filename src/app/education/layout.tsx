import React from "react";

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex flex-col gap-12 items-center">
      <strong className="text-6xl">
        Education & <br /> Academic journey
      </strong>
      {children}
    </div>
  );
}
