import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  title: string;
  value: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({ imgUrl, alt, title, href, isAuthor, value }: Props) => {
  const metricContent = (
    <div className="flex gap-1 text-center">
      <Image
        src={imgUrl}
        alt={alt}
        height={20}
        width={20}
        className="rounded-full"
      />
      <span className="text-sm">{value}</span>
      <span className="text-sm">{title}</span>
    </div>
  );

  return href ? <Link href={href}>{metricContent}</Link> : metricContent;
};

export default Metric;
