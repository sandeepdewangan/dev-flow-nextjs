import ROUTES from "@/constants/routes";
import { getDevIcons } from "@/lib/utils";
import { Badge } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  _id: string;
  name: string;
  question?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, question, showCount, compact }: Props) => {
  const tagIcon = getDevIcons(name);
  return (
    <Link href={ROUTES.TAGS(_id)}>
      <i className={tagIcon}></i> {name} {question}
    </Link>
  );
};

export default TagCard;
