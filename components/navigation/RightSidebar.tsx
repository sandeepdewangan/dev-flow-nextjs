import { Tags } from "lucide-react";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "What is react?",
  },
  {
    _id: "2",
    title: "What react does?",
  },
  {
    _id: "3",
    title:
      "Explain react architecture in details and explain how it related to web?",
  },
  {
    _id: "4",
    title: "Pros and Cons of React Library?",
  },
];
const topTags = [
  {
    _id: "1",
    name: "JavaScript",
    questions: 100,
  },
  {
    _id: "2",
    name: "React Js",
    questions: 100,
  },
  {
    _id: "3",
    name: "Next Js",
    questions: 100,
  },
  {
    _id: "4",
    name: "Python",
    questions: 200,
  },
];

const RightSidebar = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-md text-blue-400">Questions</h1>
      {hotQuestions.map((question) => (
        <Link key={question._id} href={"/questions/$id"}>
          {question.title}
        </Link>
      ))}
      <h1 className="text-md text-blue-400 mt-3 mb-3">Tags</h1>
      {topTags.map((tag) => (
        <TagCard
          key={tag._id}
          name={tag.name}
          question={tag.questions}
          _id={tag._id}
          compact
        />
      ))}
    </div>
  );
};

export default RightSidebar;
