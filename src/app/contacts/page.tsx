import {
  GmailColored,
  LinkedinColored,
  WhatsappColored,
} from "@portfolio/components/icons";
import { CONTACTS } from "@portfolio/data/contact";
import Image from "next/image";

export default function Page() {
  const data = CONTACTS;
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-0 justify-between lg:px-20 px-8 py-8 items-center w-full h-full">
      <div className="flex-1 flex flex-col lg:gap-8 gap-4 lg:pt-0 pt-12 lg:pl-40 w-full items-center">
        <a className="flex flex-row items-center gap-4 text-xl w-72" href={`https://wa.me/${data.whatsapp}`} target="_blank">
          <WhatsappColored className="size-6" /> <span className="underline text-blue-600">Message on WhatsApp</span>
        </a>
        <a
        className="flex flex-row items-center gap-4 text-xl w-72"
          href={`mailto:${data.gmail}?subject=Let's build something big&body=I%20would%20like%20to%20connect%20with%20you.`}
        >
          <GmailColored className="size-6" />
          <span className="underline text-blue-600">Send Email via Gmail</span>
        </a>
        <a className="flex flex-row items-center gap-4 text-xl w-72" href={data.linkedin} target="_blank">
          <LinkedinColored className="size-6" />
          <span className="underline text-blue-600">Connect on LinkedIn</span>
        </a>
      </div>
      <div className="w-full h-full flex flex-row items-center justify-center">
        <Image
        src="/intro/firas.png"
        alt="firas mosbehi"
        width={400}
        height={400}
        className="lg:size-[400px] size-72 border border-transparent rounded-full"
      />
      </div>
    </div>
  );
}
