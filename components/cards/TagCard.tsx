import ROUTES from "@/constants/routes";
import { getDevIcons } from "@/lib/utils";
import { Content } from "@radix-ui/react-dialog";
import { Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  _id: string;
  name: string;
  question?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  _id,
  name,
  question,
  showCount,
  compact,
  remove,
  isButton,
  handleRemove,
}: Props) => {
  const tagIcon = getDevIcons(name);
  const Content = (
    <>
      <div className="flex gap-2 align-middle">
        <i className={tagIcon}></i>
        <span>{name}</span>
        <span>{question}</span>

        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            onClick={handleRemove}
            className="cursor-pointer object-contain invert"
          />
        )}
      </div>
    </>
  );

  if (compact) {
    return isButton ? (
      <span>{Content}</span>
    ) : (
      <Link href={ROUTES.TAGS(_id)}>{Content}</Link>
    );
  }
};

export default TagCard;
