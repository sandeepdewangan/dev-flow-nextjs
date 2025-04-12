import ROUTES from "@/constants/routes";
import { formatDate } from "@/lib/utils";
import { Question, Tag } from "@/types/global";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Metric from "../Metric";

interface Props {
  question: Question;
}

const QuestionCard = ({
  question: { _id, title, tags, author, createdAt, upvotes, answers, views },
}: Props) => {
  return (
    <div className="flex flex-col shadow-3xl bg-gray-900 rounded-lg p-4">
      <span className="text-xs text-orange-400">{formatDate(createdAt)} </span>
      <div className="text-2xl">
        <Link href={ROUTES.QUESTION(_id)}>{title}</Link>
      </div>
      <div className="flex gap-2 text-sm">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <Metric
            imgUrl={author.image}
            alt={author.name}
            title={author.name}
            href={ROUTES.PROFILE(author._id)}
            value={""}
            isAuthor={true}
          />
          {/* <Metric /> */}
        </div>
        <div className="flex gap-2">
          <Metric
            imgUrl="/icons/like.svg"
            alt="Like"
            title="Like"
            value={upvotes.toString()}
            isAuthor={false}
          />
          <Metric
            imgUrl="/icons/message.svg"
            alt="Answers"
            title="Answers"
            value={answers.toString()}
            isAuthor={false}
          />
          <Metric
            imgUrl="/icons/eye.svg"
            alt="Views"
            title="Views"
            value={views.toString()}
            isAuthor={false}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
