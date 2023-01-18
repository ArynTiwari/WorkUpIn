import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl my-2 p-8 cursor-pointer flex flex-col hover:bg-white">
      <Link href={`${link}`}>
        <h2 className="text-2xl font-semibold flex">{title}</h2>
      </Link>
      <p className="flex">{description}</p>
    </div>
  );
}
