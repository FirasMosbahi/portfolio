import Image from "next/image";

type SkillCardProps = {
  readonly name: string;
  readonly image: string;
};

export default function SkillCard({ name, image }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 lg:w-28 w-24">
      <Image className="size-24" src={image} alt={name} height={200} width={200} />
      <p className="text-xl font-bold text-center w-full">{name}</p>
      {/* <p>{label}</p> */}
    </div>
  );
}
