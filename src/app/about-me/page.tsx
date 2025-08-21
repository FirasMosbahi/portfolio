import Shell from "@portfolio/components/general/Shell"
import { ABOUT_ME } from "@portfolio/data/about-me"
import Image from "next/image"

export default function Page() {
    const data = ABOUT_ME
    return <div className="flex h-full flex-col items-center lg:px-16 px-8">
        <Shell cmd={data.shell} />
        <div className="flex-1 flex lg:flex-row flex-col justify-between lg:pt-0 pt-8">
            <div className="flex flex-col items-center justify-center">
                <Image src={data.image} alt={data.name} className="lg:size-[480px] border border-transparent lg:rounded-xl size-80 rounded-full" height={400} width={400} />
            </div>
            <main className="flex flex-col items-start justify-center lg:w-[60%] w-full lg:pb-0 pb-8">
                <h3 className="text-3xl font-bold my-8">{data.callToAction}</h3>
                <div className="flex flex-col gap-4">
                    {data.aboutMe.map((p,index) => <p key={index}>{p}</p>)}
                </div>
                <p>{data.invitation}</p>
            </main>
        </div>
    </div>
}