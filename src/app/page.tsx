import { INTRO } from "@portfolio/data/intro";
import Image from "next/image";
import {Github, Linkedin, Localisation} from "@portfolio/components/icons"

export default function Home() {
  const data = INTRO;
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="flex lg:flex-row w-full flex-col-reverse justify-between lg:px-12">
        <main className="flex flex-col items-start justify-center lg:px-0 px-8 lg:w-[60%] lg:pb-0 pb-12">
          <h3 className="text-5xl font-extrabold text-left w-full my-4">Hi, I&apos;am {data.name} 👋</h3>
          <div className="flex flex-col gap-2 text-left my-4">
            {data.intro.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <div className="flex flex-row gap-2 mt-2 mb-1 items-center"><Localisation className="size-5" /> Saint Etienne, France </div>
          <div className="flex flex-row gap-2 items-center mt-1 mb-2"><div className="size-2 border border-transparent rounded-full bg-green-400" /> Online, Available for new projects </div>
          <div className="flex flex-row gap-8 items-center mt-4 mb-8 justify-center">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" ><Linkedin className="size-8" /></a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" ><Github className="size-8" /></a>
          </div>
          <button className="bg-black text-white border border-transparent rounded-xl px-4 py-2">Download resume</button>
        </main>
        <div className="w-full h-full lg:w-fit flex flex-row items-center justify-center">
          <Image
          src={data.image}
          alt={data.name}
          className="border border-transparent rounded-full size-[320px] lg:size-[480px]"
          height={400}
          width={400}
        />
        </div>
      </div>
    </div>
  );
}
