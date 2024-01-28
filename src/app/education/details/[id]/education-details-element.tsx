import React from "react";
import Image from "next/image";

export default function EducationDetailsElement({
  organisation,
  degree,
  date,
  description,
  image,
}: {
  organisation: string;
  degree: string;
  date: string;
  description: string;
  image: string;
}): React.ReactElement {
  return (
    <div className="flex bg-[#E3B65B] border border-transparent rounded-3xl py-8 w-[70rem] px-12 gap-20 flex-row items-center">
      <Image
        className="border border-transparent rounded-full"
        src={image}
        alt={organisation}
        height={150}
        width={150}
      />
      <main className="flex text-black flex-col text-xl gap-2">
        <p className="text-4xl">{organisation}</p>
        <p className="text-2xl">{degree}</p>
        <p>{date}</p>
        <p className="text-[1rem]">{description}</p>
      </main>
    </div>
  );
}
