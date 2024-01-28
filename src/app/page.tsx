"use client";

import useCustomNavigation from "@portfolio/hooks/use-custom-navigation";

export default function Home() {
  useCustomNavigation();
  return (
    <main className="w-full">
      <div className="flex flex-row justify-start w-full px-24">
        <strong className="text-5xl w-full">
          Hi , I am Firas <br /> <br />A Software <br /> Engineering student
        </strong>
        {/*<div className="text-xl w-[80%] flex flex-col gap-8">*/}
        {/*  <p>*/}
        {/*    I am a Software Engineering student with a passion for blockchain,*/}
        {/*    web and mobile development{" "}*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    {" "}*/}
        {/*    I am good in problem solving and I can work effectively in a team.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    {" "}*/}
        {/*    My professional goal is to continue improving my technical and*/}
        {/*    personal skills to become a successful engineer.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </main>
  );
}
