import Image from "next/image";
import Link from "next/link";

interface PropsI {
 
  title: string;
  about: string;
  image: string;
  url: string;
  className?: string;
  titleClass?: string; // Optional because you might not always pass it
  aboutClass?: string; // Optional
  statusClass?: string; // Optional
  startDate?: string;
  endDate?: string;
  eventType?: string;
}

const InfoCard: React.FC<PropsI> = ({
  title,
  about,
  className,

  image,
  url,
  startDate,
  endDate,
  eventType,
  titleClass = "font-bricolage-grotesque",
  aboutClass = "font-bricolage-grotesque",
  statusClass = "font-bricolage-grotesque",
}) => {
  return (
    <Link
      href={url}
      className={`relative w-full max-w-[200px] h-[200px] rounded-[30px] overflow-hidden ${className}`}
    >
      <Image src={image} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-image-card text-white">
        <div
          
        >
          <span style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
            {status}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 px-5 py-5">
          <h3 className={titleClass}>{title}</h3>
          <div className={`flex-center gap-2 mt-1 ${aboutClass}`}>
            <Image src="/icons/folder.svg" alt="" height={18} width={18} />
            <span className="text-xs">{about}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
