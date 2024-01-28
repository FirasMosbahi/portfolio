import React from "react";
import Image from "next/image";

export default function ExperienceDetailsElement({
  logo,
  company,
  position,
  description,
  bgColor,
}: {
  logo: string;
  company: string;
  position: string;
  description: string;
  bgColor: string;
}): React.ReactElement {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`flex border border-transparent gap-y-8 rounded-3xl py-8 flex-col justify-center items-center`}
    >
      <Image
        className="border border-transparent rounded-full"
        src={logo}
        alt={company}
        height={150}
        width={150}
      />
      <main className="flex text-black flex-col text-xl text-center gap-2 px-4">
        <p className="text-4xl">Position : {position}</p>
        <p className="text-2xl">Company : {company}</p>
        <p className="text-[1rem] pt-8">{description}</p>
      </main>
    </div>
  );
}
