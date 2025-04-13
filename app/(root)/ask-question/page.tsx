import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

const AskQuestion = () => {
  return (
    <>
      <span className="text-3xl">Ask a question</span>
      <div className="mt-9 w-150">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;
