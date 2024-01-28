import React from "react";
import { SKILLS_DESCRIPTION } from "@portfolio/content/skills";
import {
  Js,
  Nodejs,
  Ts,
  ReactJs,
  Angular,
  Vue,
  Next,
  Express,
  Python,
  Net,
  Nest,
  Redis,
  Mongo,
  Sql,
  Solidity,
  Go,
} from "@portfolio/components/icons";

export default function Page(): React.ReactElement {
  const content = SKILLS_DESCRIPTION;
  return (
    <div className="flex flex-col gap-12 items-center">
      <strong className="text-6xl">Skills & experiences</strong>
      <div className="text-[1.3rem] px-32 text-center">
        {content.map((c, index) => (
          <p key={index}>{c}</p>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-x-12 gap-y-4">
        <div className="flex flex-col items-center gap-y-4">
          <Js width={70} height={70} />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Nodejs width={70} height={70} />
          <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <ReactJs width={70} height={70} />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Angular width={70} height={70} />
          <p>Angular</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Vue width={70} height={70} />
          <p>Vue</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Next width={70} height={70} />
          <p>Next</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Python width={70} height={70} />
          <p>Python</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Go width={70} height={70} />
          <p>Golang</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Net width={70} height={70} />
          <p>ASP.NET</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Express width={70} height={70} />
          <p>Express.js</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Nest width={70} height={70} />
          <p>Nest.js</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Sql width={70} height={70} />
          <p>SQL</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Mongo width={70} height={70} />
          <p>Mongodb</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Redis width={70} height={70} />
          <p>Redis</p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Solidity width={70} height={70} />
          <p>Solidity</p>
        </div>
      </div>
    </div>
  );
}
