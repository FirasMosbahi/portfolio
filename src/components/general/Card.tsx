import Image from "next/image";

type CardProps = {
  readonly image: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly date?: string;
  readonly content: string | string[];
  readonly redirect?: string;
};

export default function Card({
  image,
  title,
  subtitle,
  content,
  date,
  redirect,
}: CardProps) {
  return (
    <div className="flex flex-col py-2 items-center bg-white border border-gray-200 xl:px-4 xl:py-2 xl:gap-8 rounded-lg shadow-sm md:flex-row md:max-w-xl xl:max-w-[1100px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Image
        className="object-cover object-fill w-full rounded-t-lg lg:size-40 size-72 md:rounded-none md:rounded-s-lg"
        src={image}
        alt=""
        width={160}
        height={160}
      />
      <div className="flex flex-col justify-between p-4 pt-12 lg:pt-0 leading-normal">
        {date ? (
          <div className="flex flex-row flex-wrap justify-between items-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <span>{date}</span>
          </div>
        ) : (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        )}
        {subtitle && (
          <p className="mb-2 text-lg font-bold tracking-tight text-gray-500 dark:text-white">
            {subtitle}
          </p>
        )}
        {typeof content === "string" ? (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {content}
          </p>
        ) : (
          <ul className="list-disc pl-5">
            {content.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        )}
        {redirect && <a className="mt-2 underline text-blue-600" href={redirect}>click here to see more details</a>}
      </div>
    </div>
  );
}
