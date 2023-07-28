import Link from "next/link";
import Button from "../Utils/Button";
import Image from "next/image";
interface ServiceCardProps {
  img: string,
  title: string;
  description: string;
  link: string;
}

export default function ServiceCard({
  img,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Image src={img} alt="services-image" />
      <Link href={`${link}`}>
        <h3 className="text-2xl font-semibold flex">{title}</h3>
      </Link>
      <p className="flex">{description}</p>
      <Button title="Learn more!" />
    </div>
  );
}
